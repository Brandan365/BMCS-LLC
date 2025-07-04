// src/components/sections/LocationMapSection.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Keep icon definition inside the component that uses it
const customIcon = new L.Icon({
  iconUrl: "/map.svg", // Make sure this path is correct from the public folder
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
});

export default function LocationMapSection() {
  const position = [40.234936, -76.935199];

  return (
    <section id="map" className="grid grid-cols-1 bg-black text-white md:grid-cols-2">
      {/* Location Info */}
      <div className="relative flex flex-col justify-center p-8 md:p-12">
        <div className="absolute inset-0 bg-gradient-radial from-gray-900/30 to-transparent"></div>
        <div className="relative">
          <h2 className="my-8 w-full border-b-2 border-b-yellow-400 py-2 text-2xl md:w-max md:text-3xl">
            Local Support, Anywhere You Want..
          </h2>
          <p className="font-nunito text-gray-300">
            Conveniently located at 128 S 32nd Street, Camphill, PA, we're your local partner ready to meet your courier needs with speed and reliability.
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
              Brandan's Retail Courier Services LLC <br /> Come visit us.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
}