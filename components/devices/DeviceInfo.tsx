import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { useGetDevicesQuery } from "@/state/api"; // Import the RTK Query hook
import dynamic from "next/dynamic";
import {
  BatteryFull,
  BatteryLow,
  BatteryMedium,
  TriangleAlert,
  Wifi,
  WifiOff,
} from "lucide-react";

const Map = dynamic(() => import("@/components/Map"), { ssr: false });
const DeviceInfo = () => {
  // Call RTK Query to get device data
  const { data: devices = [], isLoading, isError } = useGetDevicesQuery();
  const [selectedDeviceId, setSelectedDeviceId] = useState<string>("");

  // 🛠️ Automatically set the first device as the default selection when devices are loaded
  useEffect(() => {
    if (devices.length > 0 && !selectedDeviceId) {
      setSelectedDeviceId(devices[0].id); // Default to first device
    }
  }, [devices, selectedDeviceId]);

  // 🔥 Memoize the selected device (only recomputed if devices or selectedDeviceId changes)
  const selectedDevice = useMemo(() => {
    return (
      devices.find((device) => device.id == selectedDeviceId) || devices[0]
    );
  }, [devices, selectedDeviceId]);

  // Handle change in the dropdown to set the selected device
  const handleDeviceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDeviceId(event.target.value); // Update the selected device ID
  };

  // ⚠️ Loading State
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-gray-700">Laden van apparaten...</p>
      </div>
    );
  }

  // ⚠️ Error State
  if (isError) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-red-600">
          Fout bij het laden van apparaten. Probeer het opnieuw.
        </p>
      </div>
    );
  }

  // ⚠️ No Devices Available State
  if (!selectedDevice) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-gray-700">Geen apparaten beschikbaar</p>
      </div>
    );
  }

  const batteryLevel = selectedDevice.status_details.battery_level ?? 1;

  let BatteryIcon = BatteryLow;
  if (batteryLevel >= 80) {
    BatteryIcon = BatteryFull;
  } else if (batteryLevel >= 40) {
    BatteryIcon = BatteryMedium;
  } else {
    BatteryIcon = BatteryLow;
  }

  // const batteryStatus = batteryLevel > 20 ? "Goed" : "Laad op";

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 grid-rows-1 mb-3">
      <div className="bg-white flex flex-col sm:flex-row gap-3 p-4 shadow-md rounded-lg">
        <div className="flex-1 bg-gray-100 shadow-md rounded-lg">
          {/* Dropdown to select the device */}
          <div className="flex justify-center mb-6">
            <select
              value={selectedDeviceId} // ✅ Set the controlled value for the select
              onChange={handleDeviceChange} // ✅ Call handleChange on select change
              className="p-2 border border-gray-300 rounded-lg"
            >
              {devices.map((device) => (
                <option key={device.id} value={device.id}>
                  {device.phone_number || "Unknown Device"}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col w-full items-center justify-around">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Mini OuderenAlarm
            </h2>

            <div className="flex flex-col items-center mb-4">
              <Image
                src={"/assets/landing/black-nobg.png"} // Default image if device does not have an image URL
                alt="device image"
                width={440}
                height={1000}
                className="h-48 w-48"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center gap-3">
          <div className="bg-gray-100 p-4 rounded-lg w-full flex flex-col items-center justify-center shadow-md">
            <h3 className="text-md font-semibold mb-2">Batterijstatus</h3>
            <p className="text-gray-600 text-sm text-center">
              Laatste update:{" "}
              {selectedDevice.updated_at
                ? new Date(selectedDevice.updated_at).toLocaleString("nl-NL")
                : "Onbekend"}
            </p>
            <p className="text-gray-600 font-bold text-xl mt-2 text-center flex flex-col items-center justify-center gap-2">
              <BatteryIcon className="text-gray-500" size={64} />
              {batteryLevel}%{" "}
              {/* <span className="text-gray-500">({batteryStatus})</span> */}
              {batteryLevel < 10 && (
                <TriangleAlert className="text-red-500 ml-1" size={32} />
              )}
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full text-center">
            <h3 className="text-md font-semibold mb-2">Verbindingsstatus</h3>
            <p className="text-gray-600 font-bold text-lg flex items-center justify-center gap-2">
              {selectedDevice.status === "active" ? (
                <Wifi size={40} />
              ) : (
                <WifiOff size={40} />
              )}
            </p>
          </div>

          {/* <div className="bg-gray-30 rounded-lg flex-1">3</div> */}
        </div>
      </div>
      <div className=" flex-1 flex flex-col gap-3 items-center p-4 bg-white shadow-md rounded-lg">
        {/* Change font */}
        <h3 className="font-bold">Locatie</h3>
        {selectedDevice.location.latitude ? (
          <Map
            center={{
              lng: selectedDevice.location.longitude ?? 0,
              lat: selectedDevice.location.latitude ?? 0,
            }}
          />
        ) : (
          "Geen locatie beschikbaar"
        )}
      </div>
    </div>
  );
};

export default DeviceInfo;
