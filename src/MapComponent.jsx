import React, { useCallback, useRef, useState, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import axios from "axios";
const containerStyle = {
  width: "100%",
  height: "400px",
};
const center = {
  lat: 40.234936, // 40.234936, -76.935199
  lng: -76.935199,
};

// Define a dark mode style array
const darkModeStyle = [
  { elementType: "geometry", stylers: [{ color: "#212121" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#212121" }] },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [{ color: "#757575" }],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9e9e9e" }],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#bdbdbd" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#757575" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#181818" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#616161" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#1b1b1b" }],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [{ color: "#2c2c2c" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#8a8a8a" }],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [{ color: "#373737" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#3c3c3c" }],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [{ color: "#4e4e4e" }],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [{ color: "#616161" }],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [{ color: "#757575" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#000000" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#3d3d3d" }],
  },
];

const MapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey:import.meta.env.VITE_APP_MAPKEY,
  });

  const [pickupLocation, setPickupLocation] = useState(null);
  const [dropoffLocation, setDropoffLocation] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [totalDistance, setTotalDistance] = useState("");
  const [packageWeight, setPackageWeight] = useState("");
  const [packageSize, setPackageSize] = useState("");
  const [price, setPrice] = useState(null);
  const [selectingPickup, setSelectingPickup] = useState(true);
  const [uname, setUname] = useState("");
  const [unumber, setUnumber] = useState("");
  const [status, setStatus] = useState("");

  const mapRef = useRef(null);

  const onMapClick = useCallback(
    (event) => {
      const location = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };

      if (selectingPickup) {
        setPickupLocation(location);
        setSelectingPickup(false);
      } else {
        setDropoffLocation(location);
      }
    },
    [selectingPickup],
  );

  const onLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback((map) => {
    mapRef.current = null;
  }, []);

  // UseEffect to calculate route whenever pickup or dropoff location changes
  useEffect(() => {
    if (pickupLocation && dropoffLocation) {
      calculateRoute();
    }
  }, [pickupLocation, dropoffLocation]);

  const calculateRoute = () => {
    if (pickupLocation && dropoffLocation) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: pickupLocation,
          destination: dropoffLocation,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirectionsResponse(result);
            const distance = result.routes[0].legs[0].distance.text;
            setTotalDistance(distance);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        },
      );
    }
  };

  const calculatePrice = () => {
    if (packageWeight && packageSize && totalDistance) {
      // Assuming base price, distance multiplier, and weight factor are average values for simplicity
      const basePrice = 50; // Base price for heavy goods over a short distance
      const distanceFactor = 5; // Price per mile
      const weightFactor = parseFloat(packageWeight) * 0.75; // Adjusted weight cost factor
      const sizeFactor = packageSize === "large" ? 1.5 : 1.0; // Size cost multiplier

      // Calculate total distance in miles
      const distanceMiles = parseFloat(totalDistance.replace(" mi", ""));

      // Calculate the total price
      const calculatedPrice =
        basePrice + distanceMiles * distanceFactor + weightFactor * sizeFactor;
      setPrice(calculatedPrice.toFixed(2)); // Set the price with two decimals
    }
  };

  const getHumanReadableAddress = async (lat, lng) => {
    const apiKey = import.meta.env.VITE_APP_MAPKEY;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`;
    try {
      const response = await axios.get(url);
      const data = response.data; // Axios stores the response data in the 'data' property
      if (data.status === "OK") {
        const address = data.results[0]?.formatted_address;
        return address || "Unknown Location"; // Fallback to "Unknown Location" if address is undefined
      } else {
        console.error("Geocoding API error:", data.status);
        return "Unknown Location"; // Fallback if geocoding fails
      }
    } catch (error) {
      console.error("Error fetching address:", error);
      return "Unknown Location"; // Fallback if fetching fails
    }
  };

  const handleOrderConfirmation = async () => {
    const pickupAddress = await getHumanReadableAddress(
      pickupLocation.lat,
      pickupLocation.lng,
    );
    const dropoffAddress = await getHumanReadableAddress(
      dropoffLocation.lat,
      dropoffLocation.lng,
    );
    const formData = {
      pickupAddress,
      dropoffAddress,
      totalDistance,
      packageWeight,
      packageSize,
      price,
      uname,
      unumber,
    };
    // http://localhost:3000
    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully! we'll reach you out ASAP");
        setUname("");
        setUnumber("");
        setPrice(null);
        setPackageSize("");
        setPackageWeight("");
        setTotalDistance("");
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred. Please try again later.");
    }
  };

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onClick={onMapClick}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          styles: darkModeStyle,
        }}
      >
        {pickupLocation && !totalDistance && (
          <Marker
            position={pickupLocation}
            label={{
              text: "Pickup", // Text for the label
              color: "white", // Set label text color to white
              fontSize: "16px", // Optional: Adjust font size
              fontWeight: "400", // Optional: Adjust font weight
            }}
          />
        )}
        {dropoffLocation && !totalDistance && (
          <Marker
            position={dropoffLocation}
            label={{
              text: "Drop-Off", // Text for the label
              color: "white", // Set label text color to white
              fontSize: "16px", // Optional: Adjust font size
              fontWeight: "400", // Optional: Adjust font weight
            }}
          />
        )}
        {directionsResponse && (
          <DirectionsRenderer
            directions={directionsResponse}
            options={{
              polylineOptions: {
                strokeColor: "#FF0000",
                strokeWeight: 4,
              },
            }}
          />
        )}
        P
      </GoogleMap>

      <div className="mt-4">
        {!pickupLocation && (
          <p>Click on the map to choose your pickup location.</p>
        )}
        {pickupLocation && !dropoffLocation && (
          <p>Now, click on the map to choose your drop-off location.</p>
        )}
        {totalDistance && (
          <div className="grid grid-cols-2 gap-2 font-figtree font-semibold">
            <h2 className="col-span-2">Package Details</h2>
            <div>
              <label>
                Weight (kg):
                <input
                  type="number"
                  value={packageWeight}
                  onChange={(e) => setPackageWeight(e.target.value)}
                  className="input h-[42px]"
                />
              </label>
            </div>
            <div className="">
              <label className="">
                Size:
                <select
                  value={packageSize}
                  onChange={(e) => setPackageSize(e.target.value)}
                  className="input h-[42px]"
                >
                  <option className="hover:bg-yellow-400" value="">
                    Select Size
                  </option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </label>
            </div>

            <button
              onClick={calculatePrice}
              className={`group mt-4 rounded-full bg-white p-2 text-black ${
                price ? "hidden" : "" // Hide the button if price is set
              }`}
            >
              <h1 className="borderef col-span-2 mx-auto w-max">
                Calculate Price
              </h1>
            </button>

            {price && (
              <div className="col-span-2 mt-4">
                <h3>Estimated Price: ${price}</h3>
                <input
                  type="text"
                  placeholder="name"
                  value={uname}
                  onChange={(e) => setUname(e.target.value)}
                  className="input mb-2 h-[36px]"
                />
                <input
                  type="Your Number"
                  placeholder="Your Number"
                  value={unumber}
                  onChange={(e) => setUnumber(e.target.value)}
                  className="input h-[36px]"
                />
                <button
                  onClick={handleOrderConfirmation}
                  className="group mt-2 w-full rounded-full bg-white p-2 text-center text-black"
                >
                  <h1 className="borderef mx-auto w-max">Confirm Order</h1>
                </button>
              </div>
            )}
            {totalDistance && !price && (
              <div className="mt-4">
                <h3>Total Distance: {totalDistance}</h3>
              </div>
            )}
          </div>
        )}
      </div>
      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  ) : (
    <p>Loading map...</p>
  );
};

export default MapComponent;
