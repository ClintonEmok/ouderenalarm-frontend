"use client";

import React from "react";
import {
  useAddCaregiverToEmergencyMutation,
  useRemoveCaregiverFromEmergencyMutation,
} from "@/state/api";

type CaregiverActionsProps = {
  emergencyId: string;
  caregivers: any[];
  caregiversOnTheWay: any[];
};

const CaregiverActions: React.FC<CaregiverActionsProps> = ({
  emergencyId,
  caregivers,
  caregiversOnTheWay,
}) => {
  const [addCaregiver] = useAddCaregiverToEmergencyMutation();
  const [removeCaregiver] = useRemoveCaregiverFromEmergencyMutation();

  return (
    <div>
      <h2 className="text-2xl font-semibold text-blue-500 mb-4">
        Contactpersonen
      </h2>
      <ul className="list-disc list-inside">
        {caregivers.map((caregiver, index) => (
          <li
            key={index}
            className="mb-2 text-gray-700 flex justify-between items-center"
          >
            <div>
              <strong>{caregiver.name}</strong> - {caregiver.phone} (
              {caregiver.email})
            </div>
            <button
              onClick={() => {
                console.log("Adding caregiver to emergency", caregiver);
                addCaregiver({ emergencyId, userId: caregiver.id });
              }}
              className="ml-4 px-3 py-1 text-white bg-green-500 rounded hover:bg-green-700"
            >
              🚑 Onderweg
            </button>
          </li>
        ))}
      </ul>

      {/* Caregivers on the way */}
      {caregiversOnTheWay.length > 0 && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 border border-green-300 rounded-md">
          <h3 className="text-xl font-semibold">🚑 Hulp onderweg:</h3>
          <ul className="list-disc list-inside">
            {caregiversOnTheWay.map((caregiver) => (
              <li
                key={caregiver.id}
                className="flex justify-between items-center py-1"
              >
                {caregiver.name}
                <button
                  onClick={() =>
                    removeCaregiver({ emergencyId, userId: caregiver.id })
                  }
                  className="ml-4 px-3 py-2 text-white bg-red-500 rounded hover:bg-red-700"
                >
                  ❌ Annuleren
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CaregiverActions;
