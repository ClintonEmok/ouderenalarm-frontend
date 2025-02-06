"use client"; // ✅ Client Component

import { useParams } from "next/navigation";
import { useGetEmergencyQuery } from "@/state/api";
import { notFound } from "next/navigation";
import DeviceMap from "@/components/Map";
import CaregiverActions from "@/components/caregivers/CaregiverActions";
import UserInfo from "@/components/caregivers/Userinfo";
import EmergencyDetails from "@/components/caregivers/EmergencyDetails";

export default function EmergencyEventPage() {
  const params = useParams<{ id: string }>(); // ✅ Get `id` from useParams()
  const id = params?.id; // Ensure `id` exists before using it

  // If `id` is missing, return 404
  if (!id) return notFound();

  // Fetch emergency details using React Query
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: emergencyData, error, isLoading } = useGetEmergencyQuery(id);

  if (isLoading) return <div className="text-center mt-10">⏳ Laden...</div>;
  if (error || !emergencyData) return notFound();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full mx-auto p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-center mb-6">
          🚨 Noodmelding 🚨
        </h1>

        {/* Emergency Details */}
        <EmergencyDetails emergencyData={emergencyData} />

        {/* User Information */}
        <UserInfo user={emergencyData.user} />

        {/* Caregivers Section */}
        <CaregiverActions
          emergencyId={id}
          caregivers={emergencyData.caregivers}
          caregiversOnTheWay={emergencyData.caregivers_on_the_way}
        />

        {/* Map Section */}
        {emergencyData.device?.location && (
          <DeviceMap
            center={{
              lng: emergencyData.device.location.longitude ?? 0,
              lat: emergencyData.device.location.latitude ?? 0,
            }}
          />
        )}
      </div>
    </div>
  );
}
