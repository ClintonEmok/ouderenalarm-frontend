"use client";

import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

export default function DeviceMap() {
  const position = { lat: 51.45, lng: 5.5 };

  return (
    <APIProvider apiKey={""}>
      <div style={{ height: "50vh", width: "100%" }}>
        <Map zoom={9} center={position} mapId={process.env.NEXT_PUBLIC_MAP_ID}>
          <AdvancedMarker position={position} onClick={() => setOpen(true)}>
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
