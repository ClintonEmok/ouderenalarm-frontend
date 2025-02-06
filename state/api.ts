import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "@/lib/axiosBaseQuery";
import { Caregiver, CaregiverInvitation, Device, User } from "@/lib/interface";

export const api = createApi({
  baseQuery: axiosBaseQuery(),
  reducerPath: "api",
  tagTypes: [
    "Devices",
    "Caregivers",
    "User",
    "PatientDevices",
    "CaregiverEmergency",
    "Emergency",
  ],
  endpoints: (builder) => ({
    // 🔥 Get all devices
    getDevices: builder.query<Device[], void>({
      query: () => ({ url: "api/user/devices", method: "GET" }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Devices", id }) as const),
              "Devices",
            ]
          : ["Devices"],
    }),

    // 🔥 Get a single device
    getDevice: builder.query<Device, string>({
      query: (id) => ({ url: `api/devices/${id}`, method: "GET" }),
      providesTags: (result, error, id) => [{ type: "Devices", id }],
    }),

    // 🔥 Create a new device
    createDevice: builder.mutation<Device, Partial<Device>>({
      query: (device) => ({
        url: "api/user/add-device",
        method: "POST",
        data: device,
      }),
      invalidatesTags: ["Devices"],
    }),

    // 🔥 Update an existing device
    updateDevice: builder.mutation<Device, Partial<Device>>({
      query: (device) => ({
        url: `api/user/devices/${device.id}`,
        method: "PATCH",
        data: device,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Devices", id }],
    }),

    // 🔥 Delete a device
    deleteDevice: builder.mutation<void, string>({
      query: (id) => ({
        url: `api/user/devices/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Devices", id }],
    }),

    // 🔥 Get all caregivers for the authenticated user
    getCaregivers: builder.query<Caregiver[], void>({
      query: () => ({ url: "api/caregivers", method: "GET" }),
      providesTags: ["Caregivers"],
    }),

    // 🔥 Invite a caregiver
    inviteCaregiver: builder.mutation<CaregiverInvitation, { email: string }>({
      query: (data) => ({
        url: "api/caregivers/invite",
        method: "POST",
        data,
      }),
      invalidatesTags: ["Caregivers"],
    }),
    // 🔥 Get an emergency by its unique URL

    // 🔥 Accept an invitation as a caregiver
    acceptCaregiverInvitation: builder.mutation<
      void,
      { token: string; email: string; password?: string }
    >({
      query: (data) => ({
        url: "api/caregivers/accept",
        method: "POST",
        data,
      }),
    }),

    // 🔥 Delete a caregiver
    deleteCaregiver: builder.mutation<void, string>({
      query: (caregiverId) => ({
        url: `api/caregivers/${caregiverId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, caregiverId) => [
        { type: "Caregivers", id: caregiverId },
        "Caregivers",
      ],
    }),

    getPatientDevices: builder.query<Device[], void>({
      query: () => ({ url: "api/caregivers/patient-devices", method: "GET" }),
      providesTags: ["PatientDevices"],
    }),

    // 🔥 Get authenticated user profile
    getProfile: builder.query<User, void>({
      query: () => ({ url: "api/user", method: "GET" }),
      providesTags: ["User"],
    }),

    // 🔥 Update authenticated user profile
    updateProfile: builder.mutation<User, Partial<User>>({
      query: (user) => ({
        url: "api/user",
        method: "PATCH",
        data: user,
      }),
      invalidatesTags: ["User"],
    }),

    // Fetch emergency details
    getEmergency: builder.query<any, string>({
      query: (link) => ({ url: `api/emergency/${link}`, method: "GET" }),
      providesTags: (result, error, link) => [{ type: "Emergency", id: link }],
    }),

    // Add caregiver to emergency and invalidate `Emergency` tag
    addCaregiverToEmergency: builder.mutation<
      void,
      { emergencyId: string; userId: string }
    >({
      query: ({ emergencyId, userId }) => ({
        url: `api/emergency/${emergencyId}/caregiver-on-the-way`,
        method: "POST",
        data: { user_id: userId },
      }),
      invalidatesTags: (result, error, { emergencyId }) => [
        { type: "Emergency", id: emergencyId }, // ✅ Invalidate `getEmergency`
        { type: "CaregiverEmergency", id: emergencyId },
      ],
    }),

    // Remove caregiver from emergency and invalidate `Emergency` tag
    removeCaregiverFromEmergency: builder.mutation<
      void,
      { emergencyId: string; userId: string }
    >({
      query: ({ emergencyId, userId }) => ({
        url: `api/emergency/${emergencyId}/caregiver-on-the-way`,
        method: "DELETE",
        data: { user_id: userId },
      }),
      invalidatesTags: (result, error, { emergencyId }) => [
        { type: "Emergency", id: emergencyId }, // ✅ Invalidate `getEmergency`
        { type: "CaregiverEmergency", id: emergencyId },
      ],
    }),
  }),
});

// 🔥 Export hooks for all operations
export const {
  useGetDevicesQuery,
  useGetDeviceQuery,
  useCreateDeviceMutation,
  useUpdateDeviceMutation,
  useDeleteDeviceMutation,
  useGetCaregiversQuery,
  useInviteCaregiverMutation,
  useAcceptCaregiverInvitationMutation,
  useDeleteCaregiverMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
  useAddCaregiverToEmergencyMutation,
  useRemoveCaregiverFromEmergencyMutation,
  useGetEmergencyQuery,
} = api;
