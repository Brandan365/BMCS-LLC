// src/components/sections/LocationMapSection.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
// Import the content.json file
import content from '../../content.json'; // Adjust path based on your file structure

// Keep icon definition inside the component that uses it
const customIcon = new L.Icon({
  iconUrl: "/map.svg", // Make sure this path is correct from the public folder
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
});

export default function LocationMapSection() {
  // Destructure locationMapSection and header (for brandName in popup)
  const { locationMapSection, header } = content;

  // The position coordinates are typically fixed; you could move them to content.json
  // if you anticipate them changing often by non-developers.
  // For now, keeping them hardcoded here.
  const position = [40.234936, -76.935199];

  return (
    <section id="map" className="grid grid-cols-1 bg-black text-white md:grid-cols-2">
      {/* Location Info */}
      <div className="relative flex flex-col justify-center p-8 md:p-12">
        <div className="absolute inset-0 bg-gradient-radial from-gray-900/30 to-transparent"></div>
        <div className="relative">
          {/* Use title from content.json */}
          <h2 className="my-8 w-full border-b-2 border-b-yellow-400 py-2 text-2xl md:w-max md:text-3xl">
            {locationMapSection.title}
          </h2>
          {/* Use description from content.json */}
          <p className="font-nunito text-gray-300">
            {locationMapSection.description}
          </p>
        </div>
      </div>
      {/* Map */}
      <div className="min-h-[400px] w-full md:min-h-full">
        <MapContainer center={position} zoom={14} style={{ height: "100%", width: "100%" }} scrollWheelZoom={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={customIcon}>
            <Popup>
              {/* Use brandName from header in content.json and a generic phrase, or add a specific popupText to locationMapSection */}
              {header.brandName} <br /> Come visit us.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
}