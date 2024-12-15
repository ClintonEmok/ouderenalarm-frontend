import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { useGetDevicesQuery } from "@/state/api"; // Import the RTK Query hook

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

  return (
    <div className="bg-white rounded-lg shadow p-6 col-auto row-auto">
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

      <div className="flex flex-col w-full items-center">
        <h2 className="text-lg font-semibold mb-4 text-center">
          Mini OuderenAlarm
        </h2>

        <div className="flex flex-col items-center mb-4">
          <Image
            src={"/assets/landing/black.jpeg"} // Default image if device does not have an image URL
            alt="device image"
            width={440}
            height={1000}
            className="h-48 w-48"
          />
        </div>

        <span className="font-bold my-2">
          Telefoonnummer: {selectedDevice.phone_number ?? "Onbekend"}
        </span>
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-6">
        {/* Battery Status */}
        <div className="bg-gray-100 p-4 rounded-lg shadow w-full flex flex-col items-center justify-center">
          <h3 className="text-md font-semibold mb-2">Batterijstatus</h3>
          <p className="text-gray-600 text-sm text-center">
            Laatste update:{" "}
            {selectedDevice.updated_at
              ? new Date(selectedDevice.updated_at).toLocaleString()
              : "Onbekend"}
          </p>
          <p className="text-gray-600 font-bold text-xl mt-2 text-center">
            {selectedDevice.battery_percentage ?? 1}%{" "}
            <span className="text-gray-500">
              ({selectedDevice.battery_percentage > 20 ? "Goed" : "Laad op"})
            </span>
          </p>
        </div>

        {/* Connection Status */}
        <div className="bg-gray-100 p-4 rounded-lg shadow w-full text-center">
          <h3 className="text-md font-semibold mb-2">Verbindingsstatus</h3>
          <p className="text-gray-600 font-bold text-lg">{"Onbekend"}</p>
        </div>
      </div>
    </div>
  );
};

export default DeviceInfo;
