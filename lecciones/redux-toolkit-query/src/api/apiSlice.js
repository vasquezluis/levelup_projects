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
      providesTags: ["Tasks"],
      // para transformar la forma de proveer los datos
      transformResponse: (response) => response.sort((a, b) => b.id - a.id),
    }),
    createTasks: builder.mutation({
      query: (newTask) => ({
        url: "/tasks",
        method: "POST",
        body: newTask,
      }),
      // volver a ejecutar la pedida de datos (por medio del nombre: providesTags)
      // para no tener que recargar la pagina y ver los cambios
      invalidatesTags: ["Tasks"],
    }),
    updateTasks: builder.mutation({
      query: (updatedTask) => ({
        url: `/tasks/${updatedTask.id}`,
        method: "PATCH",
        body: updatedTask,
      }),
      invalidatesTags: ["Tasks"],
    }),
    deleteTasks: builder.mutation({
      // se usa parentesis porque ejecuta la funcion
      // retorna un objeto
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useCreateTasksMutation,
  useDeleteTasksMutation,
  useUpdateTasksMutation,
} = apiSlice;
