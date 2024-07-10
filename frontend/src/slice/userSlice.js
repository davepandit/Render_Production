import { apiSlice } from "./apiSlice";

const userSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "/api/users/all",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUsersQuery } = userSlice;
