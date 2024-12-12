import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-red-500 text-white p-4 rounded-lg mb-6 flex flex-col md:flex-row items-start md:items-center justify-between">
        <h1 className="text-lg font-semibold mb-2 md:mb-0">
          Hello [User]! Welcome to MyGuardian
        </h1>
        <button className="bg-white text-purple-600 font-semibold px-4 py-2 rounded shadow hover:bg-gray-100">
          Update System Information
        </button>
      </header>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Mini Guardian Card */}
        <div className="bg-white rounded-lg shadow p-6 flex">
          <div className="flex flex-col w-full">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Mini Guardian
            </h2>
            <div className="flex flex-col items-center mb-4">
              <img
                src="/path-to-your-image.png"
                alt="Mini Guardian"
                className="w-48 h-48 object-contain"
              />
              <span className="font-bold">UUID: 1210210212</span>
            </div>
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
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4 text-center">Location</h2>
          <div className="h-40 bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Map Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
