import baseApi from '../../services';

export const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeList: builder.query({
      query: () => '/employees'
    })
  })
});

export const { useGetEmployeeListQuery } = employeeApi;
