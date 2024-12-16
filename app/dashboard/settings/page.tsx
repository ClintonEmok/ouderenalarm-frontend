"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import UpdatePasswordForm from "@/components/forms/UpdatePasswordForm";
import AccountForm from "@/components/forms/AccountForm";
// import AddressForm from "@/components/forms/AddressForm";

const Settings = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <Tabs defaultValue="account" className="w-full">
        <TabsList className="flex gap-4">
          <TabsTrigger value="account" className="px-4 py-2">
            Account
          </TabsTrigger>
          <TabsTrigger value="password" className="px-4 py-2">
            Password
          </TabsTrigger>
          {/* <TabsTrigger value="address" className="px-4 py-2">
            Address
          </TabsTrigger> */}
        </TabsList>

        <TabsContent value="account">
          <AccountForm />
        </TabsContent>

        <TabsContent value="password">
          <UpdatePasswordForm />
        </TabsContent>

        {/* <TabsContent value="address">
          <AddressForm />
        </TabsContent> */}
      </Tabs>
    </div>
  );
};

export default Settings;
