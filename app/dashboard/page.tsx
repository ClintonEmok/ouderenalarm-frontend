import DeviceTable from "@/components/devices/DeviceTable";
import DeviceMap from "@/components/Map";
import Image from "next/image";
import React, { useMemo } from "react";

const Dashboard = () => {
  const data = useMemo(
    () => [
      {
        DeviceID: "1816",
        GebruikerID: "34",
        AlarmCode: "KiS581",
        longitude: "137.1434720",
        latitude: "-20.8241157",
        mapslink: "https://maps.google.com/?q=37.4952818,-170.8937402",
        TelefoonnummerDevice: "098-393-7948",
        Batterijpercentage: "4",
        created_at: "2024-01-19T07:52:26",
        updated_at: "2024-08-18T03:30:01",
      },
      {
        DeviceID: "1162",
        GebruikerID: "88",
        AlarmCode: "ehk062",
        longitude: "-4.5915762",
        latitude: "-71.9852975",
        mapslink: "https://maps.google.com/?q=-8.3457325,85.7931522",
        TelefoonnummerDevice: "2447986337",
        Batterijpercentage: "60",
        created_at: "2024-09-27T10:18:12",
        updated_at: "2024-11-09T13:37:09",
      },
      {
        DeviceID: "4871",
        GebruikerID: "12",
        AlarmCode: "nyK645",
        longitude: "169.7316821",
        latitude: "88.5362978",
        mapslink: "https://maps.google.com/?q=-56.3594079,-153.7532076",
        TelefoonnummerDevice: "285-341-7011",
        Batterijpercentage: "99",
        created_at: "2024-04-06T07:25:01",
        updated_at: "2024-05-03T16:14:16",
      },
      {
        DeviceID: "3497",
        GebruikerID: "37",
        AlarmCode: "Hcw792",
        longitude: "-130.3541135",
        latitude: "23.2123437",
        mapslink: "https://maps.google.com/?q=-6.4296431,-34.2606280",
        TelefoonnummerDevice: "001-549-829-2437x4638",
        Batterijpercentage: "58",
        created_at: "2024-06-19T17:49:23",
        updated_at: "2024-12-06T13:26:57",
      },
      {
        DeviceID: "2714",
        GebruikerID: "11",
        AlarmCode: "HUd181",
        longitude: "-25.2289241",
        latitude: "-82.4789663",
        mapslink: "https://maps.google.com/?q=52.6530824,-142.4008331",
        TelefoonnummerDevice: "+1-740-442-3111",
        Batterijpercentage: "71",
        created_at: "2024-01-13T05:10:11",
        updated_at: "2024-10-24T20:45:22",
      },
    ],
    []
  );
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#43A3FA] to-[#286094] text-white p-4 rounded-lg mb-6 flex flex-col md:flex-row items-start md:items-center justify-between">
        <h1 className="text-lg font-semibold mb-2 md:mb-0">
          Hallo Koen! Welkom bij MyOuderenAlarm
        </h1>
        {/* <button className="bg-white text-primary-500 font-semibold px-4 py-2 rounded shadow hover:bg-gray-100">
          Update System Information
        </button> */}
      </header>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {/* Mini Guardian Card */}
        <div className="bg-white rounded-lg shadow p-6 fle col-auto row-auto">
          <div className="flex flex-col w-full items-center">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Mini Guardian
            </h2>
            <div className="flex flex-col items-center mb-4">
              <Image
                src="/assets/landing/black.jpeg"
                alt="phone"
                width={440}
                height={1000}
                className="h-48 w-48"
              />
            </div>
            <span className="font-bold mt-2">UUID: 1210210212</span>
          </div>
          <div className="flex flex-col items-center justify-center w-full gap-6">
            {/* Battery Status */}
            <div className="bg-gray-100 p-4 rounded-lg shadow w-full flex flex-col items-center justify-center">
              <h3 className="text-md font-semibold mb-2">Battery Status</h3>
              <p className="text-gray-600 text-sm text-center">
                As of: 2022-08-25 08:07:16
              </p>
              <p className="text-gray-600 font-bold text-xl mt-2 text-center">
                95% <span className="text-gray-500">(Not Charging)</span>
              </p>
              <button className="mt-4 bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded shadow hover:bg-gray-300">
                Details
              </button>
            </div>

            {/* Connection Status */}
            <div className="bg-gray-100 p-4 rounded-lg shadow w-full text-center">
              <h3 className="text-md font-semibold mb-2">Status</h3>
              <p className="text-gray-600 font-bold text-lg">Good</p>
              {/* <p className="text-gray-500">System Status: In Service</p> */}
            </div>
          </div>
        </div>

        {/* Location Card */}
        <div className="bg-white rounded-lg shadow p-6 col-auto row-auto">
          <h2 className="text-lg font-semibold mb-4 text-center">Location</h2>
          <div className="bg-gray-200 rounded-lg flex items-center justify-center">
            <DeviceMap />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 xs:col-span-1 lg:col-span-2">
          <h2 className="text-lg font-semibold mb-4 text-center">Devices</h2>
          <DeviceTable data={data} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
