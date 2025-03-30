"use client";

import React from "react";

type EmergencyDetailsProps = {
  emergencyData: any;
};

const EmergencyDetails: React.FC<EmergencyDetailsProps> = ({
  emergencyData,
}) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-blue-500 mb-4">
        Details van Kritieke Melding
      </h2>
      <div className="mb-6 p-4 bg-white border border-gray-200 rounded-md">
        <p className="mb-2">
          <strong className="text-gray-700">📟 IMEI van ouderen alarm:</strong>{" "}
          {emergencyData.device?.imei || "Onbekend"}
        </p>
        <p className="mb-2">
          <strong className="text-gray-700">📞 Telefoonnummer:</strong>{" "}
          {emergencyData.device?.phone_number || "Onbekend"}
        </p>
        <p>
          <strong className="text-gray-700">⏰ Geactiveerd op:</strong>{" "}
          {emergencyData.triggered_at
            ? new Date(emergencyData.triggered_at).toLocaleString("nl-NL")
            : "Onbekend"}
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-blue-500 mb-4">Meldingen</h2>
      <ul className="list-disc list-inside mb-6">
        {emergencyData.alerts?.fall_down_alert && (
          <li className="text-gray-700">⚠️ Valalarm</li>
        )}
        {emergencyData.alerts?.sos_alert && (
          <li className="text-gray-700">🆘 SOS-alarm</li>
        )}
      </ul>
    </div>
  );
};

export default EmergencyDetails;
