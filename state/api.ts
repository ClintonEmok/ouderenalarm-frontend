import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL }),
  reducerPath: "api",
  tagTypes: [],
  endpoints: (builder) => ({}),
});

export const {} = api;
