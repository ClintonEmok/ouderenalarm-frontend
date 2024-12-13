"use client";

import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";

export default function DeviceMap() {
  const position = { lat: 51.45, lng: 5.5 };

  return (
    <APIProvider apiKey={""}>
      <div style={{ height: "50vh", width: "100%" }}>
        <Map zoom={9} center={position} mapId={process.env.NEXT_PUBLIC_MAP_ID}>
          <AdvancedMarker position={position}>
            <Pin
              background={"grey"}
              borderColor={"green"}
              glyphColor={"purple"}
            />
          </AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  );
}
