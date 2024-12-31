"use client";

import DeviceInfo from "@/components/devices/DeviceInfo";
import MaterialDeviceTable from "@/components/devices/MaterialDeviceTable";
import DeviceMap from "@/components/Map";
import { useAuth } from "@/hooks/auth";
import React from "react";

const Dashboard = () => {
  const { user } = useAuth({ middleware: "auth" });
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#43A3FA] to-[#286094] text-white p-4 rounded-lg mb-6 flex flex-col md:flex-row items-start md:items-center justify-between">
        <h1 className="text-lg font-semibold mb-2 md:mb-0">
          Hallo {user?.name}! Welkom bij MyOuderenAlarm
        </h1>
        {/* <button className="bg-white text-primary-500 font-semibold px-4 py-2 rounded shadow hover:bg-gray-100">
          Systeeminformatie bijwerken
        </button> */}
      </header>

      {/* Hoofdinhoud raster */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {/* Mini Guardian Kaart */}
        <DeviceInfo />

        {/* Locatie Kaart */}
        <div className="bg-white rounded-lg shadow p-6 col-auto row-auto">
          <h2 className="text-lg font-semibold mb-4 text-center">Locatie</h2>
          <div className="bg-gray-200 rounded-lg flex items-center justify-center">
            <DeviceMap />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 xs:col-span-1 lg:col-span-2">
          <h2 className="text-lg font-semibold mb-4 text-center">Apparaten</h2>
          <MaterialDeviceTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
