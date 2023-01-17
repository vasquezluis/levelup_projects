import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  // nombre para los datos que vienen desde un servidor
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  // peticiones HTTP
  // builder definer funciones que traen datos y las que mutan datos
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/tasks",
    }),
  }),
});

export const { useGetTasksQuery } = apiSlice;
