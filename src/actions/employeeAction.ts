import { createAction } from '@reduxjs/toolkit';

export type EmployeeType = {
  employee: {
    id: number;
    name: string;
    email: string;
    role: string;
    status: boolean;
    address: {
      line1: string;
      line2: string;
      pincode: string;
    };
    department: number;
  };
};

export const addEmployee = createAction<EmployeeType>('EMPLOYEE:CREATE');
export const editEmployee = createAction<EmployeeType>('EMPLOYEE:EDIT');
export const deleteEmployee = createAction<{ employee: { id: number } }>('EMPLOYEE:DELETE');
