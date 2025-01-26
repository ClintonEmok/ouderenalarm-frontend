"use client";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  ZoomControl,
} from "react-leaflet";
import { LatLngLiteral } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

type MapLocation = LatLngLiteral & { id: string };
type MapProps = {
  center: LatLngLiteral;
  // locations: MapLocation[];
};

type MapType = "roadmap" | "satellite" | "hybrid" | "terrain";
export default function DeviceMap({ center }: MapProps) {
  return (
    <div className="w-full h-[60vh]">
      <MapContainer
        center={center}
        zoom={13}
        minZoom={5}
        scrollWheelZoom={true}
        attributionControl={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <ZoomControl position="bottomright" />
        {/* {locations.map((location) => (
          <Marker key={location.id} position={location} />
        ))} */}
        <Marker position={center} />
      </MapContainer>
    </div>
  );
}
