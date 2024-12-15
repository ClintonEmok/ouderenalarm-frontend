"use client";

import MaterialDeviceTable from "@/components/devices/MaterialDeviceTable";
import DeviceMap from "@/components/Map";
import { useAuth } from "@/hooks/auth";
import Image from "next/image";
import React from "react";

const Dashboard = () => {
  const { user } = useAuth({});
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
        <div className="bg-white rounded-lg shadow p-6 col-auto row-auto">
          <div className="flex flex-col w-full items-center">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Mini OuderenAlarm
            </h2>
            <div className="flex flex-col items-center mb-4">
              <Image
                src="/assets/landing/black.jpeg"
                alt="telefoon"
                width={440}
                height={1000}
                className="h-48 w-48"
              />
            </div>
            <span className="font-bold mt-2">UUID: 1210210212</span>
          </div>
          <div className="flex flex-col items-center justify-center w-full gap-6">
            {/* Batterijstatus */}
            <div className="bg-gray-100 p-4 rounded-lg shadow w-full flex flex-col items-center justify-center">
              <h3 className="text-md font-semibold mb-2">Batterijstatus</h3>
              <p className="text-gray-600 text-sm text-center">
                Vanaf: 2022-08-25 08:07:16
              </p>
              <p className="text-gray-600 font-bold text-xl mt-2 text-center">
                95%{" "}
                <span className="text-gray-500">(Niet aan het opladen)</span>
              </p>
              <button className="mt-4 bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded shadow hover:bg-gray-300">
                Details
              </button>
            </div>

            {/* Verbindingsstatus */}
            <div className="bg-gray-100 p-4 rounded-lg shadow w-full text-center">
              <h3 className="text-md font-semibold mb-2">Status</h3>
              <p className="text-gray-600 font-bold text-lg">Goed</p>
              {/* <p className="text-gray-500">Systeemstatus: In dienst</p> */}
            </div>
          </div>
        </div>

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
