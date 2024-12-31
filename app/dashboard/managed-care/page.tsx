"use client";

import React from "react";
// The table component we created
import { Button } from "@mui/material";
import CaregiverTable from "@/components/caregivers/CaregiverTable";

const CaregiverManagementPage = () => {
  return (
    <div className="p-6">
      {/* Page Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Caregiver Management
        </h1>
        <p className="text-gray-600">
          Manage caregivers who are associated with your account.
        </p>
      </header>

      {/* Caregiver Table */}
      <div className="bg-white shadow rounded-lg p-6">
        <CaregiverTable />
      </div>

      {/* Additional Actions */}
      <div className="mt-6">
        <Button
          variant="outlined"
          color="primary"
          onClick={() => alert("Feature coming soon!")}
        >
          View Caregiver Analytics
        </Button>
      </div>
    </div>
  );
};

export default CaregiverManagementPage;
