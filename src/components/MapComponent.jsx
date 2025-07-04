// src/components/MapComponent.jsx

import React, { useState, useEffect, useCallback } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMapEvents } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import polylineUtil from '@mapbox/polyline';
import emailjs from '@emailjs/browser';

// --- CONFIGURATION & STYLING ---
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const mapCenter = [40.26, -76.93];
const orsApiKey = '5b3ce3597851110001cf6248f0ee1b2d92fa489eb1ea9b763d6d30bd';
const darkTileUrl = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";
const tileAttribution = '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>';

// --- HELPER COMPONENT for MAP CLICKS ---
function LocationPicker({ onMapClick }) {
  useMapEvents({
    click(e) { onMapClick([e.latlng.lat, e.latlng.lng]); },
  });
  return null;
}

// --- MAIN COMPONENT ---
export default function MapComponent() {
  const [step, setStep] = useState(1); // 1: PickUp, 2: DropOff, 3: Details, 4: Confirm, 5: Success
  const [locations, setLocations] = useState([]);
  const [route, setRoute] = useState({ polyline: [], distance: 0, pickupAddress: "", dropoffAddress: "", googleMapsUrl: "" });
  const [price, setPrice] = useState(null);
  const [status, setStatus] = useState({ message: "", type: "" });
  const [formData, setFormData] = useState({ weight: "", size: "small", name: "", phone: "" });
  const [isLoading, setIsLoading] = useState(false);

  const getRoute = useCallback(async (pickup, dropoff) => {
    setIsLoading(true);
    setStatus({ message: "Calculating route...", type: "info" });
    try {
      const response = await axios.post(`https://api.openrouteservice.org/v2/directions/driving-car`, { coordinates: [pickup, dropoff] }, { headers: { 'Authorization': orsApiKey } });
      const data = response.data.routes[0];
      const decodedPolyline = polylineUtil.decode(data.geometry);
      const distanceInMiles = (data.summary.distance / 1609.34).toFixed(1);

      const [pickupAddress, dropoffAddress] = await Promise.all([
        getHumanReadableAddress(pickup), getHumanReadableAddress(dropoff),
      ]);

      const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(pickupAddress)}&destination=${encodeURIComponent(dropoffAddress)}`;
      
      setRoute({ polyline: decodedPolyline, distance: distanceInMiles, pickupAddress, dropoffAddress, googleMapsUrl });
      setStatus({ message: "", type: "" });
      setStep(3); // Move to details step
    } catch (error) {
      console.error("Error fetching route:", error);
      setStatus({ message: "Could not calculate route. Please reset and try again.", type: "error" });
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getHumanReadableAddress = async ([lng, lat]) => {
    try {
      const response = await axios.get(`https://api.openrouteservice.org/geocode/reverse?api_key=${orsApiKey}&point.lon=${lng}&point.lat=${lat}`);
      return response.data.features[0]?.properties.label || "Unknown Location";
    } catch { return "Unknown Location"; }
  };

  useEffect(() => {
    if (locations.length === 2) {
      const [pickup, dropoff] = locations.map(loc => [loc[1], loc[0]]);
      getRoute(pickup, dropoff);
    }
  }, [locations, getRoute]);

  const handleMapClick = (latlng) => {
    if (locations.length < 2) {
      setLocations(prev => [...prev, latlng]);
      if (locations.length === 0) setStep(2); // Move to drop-off step
    }
  };

  const handleFormChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleCalculatePrice = () => {
    if (!formData.weight) {
      setStatus({ message: "Please enter a package weight.", type: "error" });
      return;
    }
    const basePrice = 5, distanceFactor = 2.5, weightFactor = parseFloat(formData.weight) * 0.5;
    const sizeFactors = { small: 1.0, medium: 1.25, large: 1.75 };
    const calculatedPrice = basePrice + (route.distance * distanceFactor) + weightFactor * sizeFactors[formData.size];
    setPrice(calculatedPrice.toFixed(2));
    setStatus({ message: "", type: "" });
    setStep(4); // Move to confirm step
  };

  const handleConfirmOrder = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setStatus({ message: "Please enter your name and phone number.", type: "error" });
      return;
    }
    setIsLoading(true);
    setStatus({ message: "Submitting order...", type: "info" });

    const templateParams = {
        pickup_address: route.pickupAddress,
        dropoff_address: route.dropoffAddress,
        total_distance: `${route.distance} mi`,
        package_weight: `${formData.weight} kg`,
        package_size: formData.size,
        estimated_price: `$${price}`,
        user_name: formData.name,
        user_phone: formData.phone,
        google_maps_link: route.googleMapsUrl,
    };
    
    try {
        await emailjs.send(
            'service_nig4r8h',
            'template_sqrh15d', // Use a NEW template ID for orders
            templateParams,
            'gvkL8XJM_SwIpdp67'
        );
        setStatus({ message: "Order confirmed! We will contact you shortly.", type: "success" });
        setStep(5); // Move to success step
    } catch (error) {
        console.error("EmailJS Error:", error);
        setStatus({ message: "An error occurred. Please try again later.", type: "error" });
    } finally {
        setIsLoading(false);
    }
  };

  const handleReset = () => {
    setStep(1); setLocations([]); setPrice(null);
    setRoute({ polyline: [], distance: 0, pickupAddress: "", dropoffAddress: "", googleMapsUrl: "" });
    setStatus({ message: "", type: "" });
    setFormData({ weight: "", size: "small", name: "", phone: "" });
  };
  
  const instructionText = {
    1: "Click on the map to set your pickup location.",
    2: "Excellent. Now, click to set your drop-off location.",
    3: "Route calculated! Please provide package details below.",
    4: "Almost there! Confirm your details to place the order.",
  };

  return (
    <div className="space-y-4 font-nunito text-white">
      {/* Map Section */}
      <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
        <MapContainer center={mapCenter} zoom={11} style={{ height: "100%", width: "100%" }} scrollWheelZoom={false}>
          <TileLayer url={darkTileUrl} attribution={tileAttribution} />
          <LocationPicker onMapClick={handleMapClick} />
          {locations.map((pos, i) => <Marker key={i} position={pos}><Popup>{i === 0 ? "Pickup" : "Drop-off"}</Popup></Marker>)}
          {route.polyline.length > 0 && <Polyline positions={route.polyline} color="#fbbF24" weight={5} opacity={0.8} />}
        </MapContainer>
        {isLoading && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-[1000]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-yellow-400"></div>
            </div>
        )}
      </div>

      {/* Control Panel Section */}
      <div className="p-4 bg-gray-800/70 backdrop-blur-sm rounded-lg">
        <div className="flex justify-between items-center mb-2">
            <p className="text-lg font-bold text-gray-100">Quote Calculator</p>
            <button onClick={handleReset} className="text-sm text-gray-400 hover:text-white transition-colors">Start Over</button>
        </div>
        
        {step < 5 && <p className="text-gray-400 text-sm mb-4 min-h-[20px]">{instructionText[step] || status.message}</p>}
        {status.type === 'error' && <p className="text-red-400 text-sm font-semibold mb-4">{status.message}</p>}
        
        {step === 3 && ( // Details Step
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="weight" className="label-style">Weight (kg)</label>
              <input type="number" name="weight" id="weight" value={formData.weight} onChange={handleFormChange} className="input-style" placeholder="e.g., 5" />
            </div>
            <div>
              <label htmlFor="size" className="label-style">Size</label>
              <select name="size" id="size" value={formData.size} onChange={handleFormChange} className="input-style">
                <option value="small">Small</option><option value="medium">Medium</option><option value="large">Large</option>
              </select>
            </div>
            <div className="flex items-end">
              <button onClick={handleCalculatePrice} disabled={isLoading} className="btn-primary w-full">Calculate Price</button>
            </div>
            <p className="md:col-span-3 text-center text-sm text-gray-400">Total Distance: {route.distance} miles</p>
          </div>
        )}
        
        {step === 4 && ( // Confirmation Step
          <form onSubmit={handleConfirmOrder} className="space-y-4">
            <p className="text-center text-2xl font-bold">Estimated Price: <span className="text-yellow-400">${price}</span></p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="label-style">Your Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleFormChange} className="input-style" required />
              </div>
              <div>
                <label htmlFor="phone" className="label-style">Phone Number</label>
                <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleFormChange} className="input-style" required />
              </div>
            </div>
            <button type="submit" disabled={isLoading} className="btn-primary w-full">Confirm & Send Order</button>
          </form>
        )}

        {step === 5 && ( // Success Step
            <div className="text-center p-4 bg-green-900/50 rounded-lg">
                <h3 className="text-xl font-bold text-green-300">Order Sent!</h3>
                <p className="text-green-200 mt-2">Thank you! We've received your request and will be in touch shortly to finalize the details.</p>
                <a href={route.googleMapsUrl} target="_blank" rel="noopener noreferrer" 
                   className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                    View Route on Google Maps
                </a>
            </div>
        )}
      </div>
    </div>
  );
}