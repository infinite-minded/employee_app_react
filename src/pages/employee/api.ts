import baseApi from '../../services';

export type EmployeePayloadType = {
  id?: number;
  name: string;
  email: string;
  password: string;
  status: boolean;
  role: string;
  address?: {
    line1: string;
    line2: string;
    pincode: string;
  };
  department?: {
    id?: number;
    name?: string;
  };
};

export const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeList: builder.query({
      query: () => '/employees',
      providesTags: ['employee']
    }),
    getEmployeeById: builder.query({
      query: (id: number) => ({
        url: `/employees/${id}`,
        method: 'GET'
      })
    }),
    createEmployee: builder.mutation({
      query: (body: EmployeePayloadType) => ({
        url: `/employees/`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['employee']
    }),
    editEmployee: builder.mutation({
      query: (body: EmployeePayloadType) => ({
        url: `/employees/${body.id}`,
        method: 'PUT',
        body
      }),
      invalidatesTags: ['employee']
    }),
    deleteEmployeeById: builder.mutation({
      query: (id: number) => ({
        url: `/employees/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['employee']
    })
  })
});

export const {
  useGetEmployeeListQuery,
  useGetEmployeeByIdQuery,
  useLazyGetEmployeeByIdQuery,
  useDeleteEmployeeByIdMutation,
  useCreateEmployeeMutation,
  useEditEmployeeMutation
} = employeeApi;
