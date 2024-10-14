// src/features/api/apiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api", // RTK Query slice path
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }), // Define your base API URL
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts", // Example endpoint
    }),
  }),
});

export const { useGetPostsQuery } = apiSlice; // Export RTK Query hooks
