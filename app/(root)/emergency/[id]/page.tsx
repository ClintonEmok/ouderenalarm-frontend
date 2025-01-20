import axios from "@/lib/axios";
import { notFound } from "next/navigation";
import React from "react";

export const getEmergencyDetails = async (id: string) => {
  try {
    const response = await axios.get(`/api/emergency/${id}`, {
      headers: {
        "Cache-Control": "no-store", // Avoid caching the response
      },
    });

    return response.data; // Axios automatically parses JSON
  } catch (error) {
    console.error("Error fetching emergency details:", error);
    return null;
  }
};

type EmergencyDetailsProps = {
  params: { id: string };
};

const EmergencyEventPage = async ({ params }: EmergencyDetailsProps) => {
  const { id } = await params;

  // Fetch emergency details
  const emergencyData = await getEmergencyDetails(id);

  if (!emergencyData) {
    notFound(); // Redirect to 404 page if data is not found
  }

  return (
    <div className="max-w-4xl mx-auto p-6  rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-center mb-6">Noodmelding</h1>
      <h2 className="text-2xl font-semibold text-blue-500 mb-4">
        Details van Kritieke Melding
      </h2>
      <div className="mb-6 p-4 bg-white border border-gray-200 rounded-md">
        <p className="mb-2">
          <strong className="text-gray-700">IMEI van Apparaat:</strong>{" "}
          {emergencyData.device.imei}
        </p>
        <p className="mb-2">
          <strong className="text-gray-700">Telefoonnummer:</strong>{" "}
          {emergencyData.device.phone_number}
        </p>
        <p>
          <strong className="text-gray-700">Geactiveerd op:</strong>{" "}
          {new Date(emergencyData.triggered_at).toLocaleString("nl-NL")}
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-blue-500 mb-4">Meldingen</h2>
      <ul className="list-disc list-inside mb-6">
        {emergencyData.alerts.fall_down_alert && (
          <li className="text-gray-700">Valalarm</li>
        )}
        {emergencyData.alerts.sos_alert && (
          <li className="text-gray-700">SOS-alarm</li>
        )}
      </ul>

      <h2 className="text-2xl font-semibold text-blue-500 mb-4">
        Gebruikersgegevens
      </h2>
      <div className="mb-6 p-4 bg-white border border-gray-200 rounded-md">
        <p className="mb-2">
          <strong className="text-gray-700">Naam:</strong>{" "}
          {emergencyData.user.name}
        </p>
        {/* <p className="mb-2">
          <strong className="text-gray-700">Leeftijd:</strong>{" "}
          {emergencyData.user.age}
        </p> */}
        <p>
          <strong className="text-gray-700">Adres:</strong>{" "}
          {emergencyData.user.address}
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-blue-500 mb-4">
        Contactpersonen
      </h2>
      <ul className="list-disc list-inside">
        {emergencyData.caregivers.map((caregiver: any, index: number) => (
          <li key={index} className="mb-2 text-gray-700">
            <strong>{caregiver.name}</strong> - {caregiver.phone} (
            {caregiver.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmergencyEventPage;
