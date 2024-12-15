import { createApi } from "@reduxjs/toolkit/query/react";
// Import custom base query
import { Device } from "@/lib/interface";
import axiosBaseQuery from "@/lib/axiosBaseQuery";

export const api = createApi({
  baseQuery: axiosBaseQuery(),
  reducerPath: "api",
  tagTypes: ["Devices", "Device"],
  endpoints: (builder) => ({
    // 🔥 Get all devices
    getDevices: builder.query<Device[], void>({
      query: () => ({ url: "api/devices", method: "GET" }),
      providesTags: ["Devices"],
    }),

    // 🔥 Get a single device
    getDevice: builder.query<Device, string>({
      query: (id) => ({ url: `api/devices/${id}`, method: "GET" }),
      providesTags: (result, error, id) => [{ type: "Device", id }],
    }),

    // 🔥 Create a new device
    createDevice: builder.mutation<Device, Partial<Device>>({
      query: (device) => ({
        url: "api/devices",
        method: "POST",
        data: device,
      }),
      invalidatesTags: ["Devices"],
    }),

    // 🔥 Update an existing device
    updateDevice: builder.mutation<Device, Partial<Device>>({
      query: (device) => ({
        url: `api/devices/${device.id}`,
        method: "PATCH",
        data: device,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Device", id }],
    }),

    // 🔥 Delete a device
    deleteDevice: builder.mutation<void, string>({
      query: (id) => ({
        url: `api/devices/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => ["Devices"],
    }),
  }),
});

// 🔥 Export hooks for CRUD operations
export const {
  useGetDevicesQuery,
  useGetDeviceQuery,
  useCreateDeviceMutation,
  useUpdateDeviceMutation,
  useDeleteDeviceMutation,
} = api;
