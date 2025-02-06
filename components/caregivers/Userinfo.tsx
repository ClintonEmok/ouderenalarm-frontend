"use client";

import React from "react";

type UserInfoProps = {
  user: any;
};

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-blue-500 mb-4">
        Persoonsgegevens
      </h2>
      <div className="mb-6 p-4 bg-white border border-gray-200 rounded-md">
        <p className="mb-2">
          <strong className="text-gray-700">👤 Naam:</strong>{" "}
          {user?.name || "Onbekend"}
        </p>
        <p>
          <strong className="text-gray-700">🏠 Adres:</strong>{" "}
          {user?.address || "Onbekend"}
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
