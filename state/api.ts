import { Device } from "@/lib/interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL }),
  reducerPath: "api",
  tagTypes: ["Devices", "Device"],
  endpoints: (builder) => ({
    getDevices: builder.query<Device[], void>({
      query: () => "api/v1/devices",
      providesTags: ["Devices"],
    }),
    getDevice: builder.query<Device, string>({
      query: (id) => `api/v1/devices/${id}`,
      providesTags: (result, error, id) => [{ type: "Devices", id }],
    }),
    createDevice: builder.mutation<Device, Partial<Device>>({
      query: (device) => ({
        url: "api/v1/devices",
        method: "POST",
        device,
      }),
      invalidatesTags: ["Devices"],
    }),
    updateDevice: builder.mutation<Device, Partial<Device>>({
      query: (device) => ({
        url: `api/v1/devices/${device.DeviceID}`,
        method: "PATCH",
        device,
      }),
      invalidatesTags: (result, error, { DeviceID }) => [
        { type: "Devices", DeviceID },
      ],
    }),
  }),
});

export const { useGetDevicesQuery, useCreateDeviceMutation } = api;
