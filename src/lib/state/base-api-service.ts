import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// initialize an empty api service that we'll inject endpoints into later as needed
export const baseApiService = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_FIRESTORE_BASE_API_URL,
    prepareHeaders: (header) => {

    },
  }),
  tagTypes: [],
  endpoints: () => ({}),
});
