import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const employeeService = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: () => ({
        url: '/employees/list',
        method: 'GET'
      })
    })
  })
});

export const { useGetEmployeesQuery, useLazyGetEmployeesQuery } = employeeService;
