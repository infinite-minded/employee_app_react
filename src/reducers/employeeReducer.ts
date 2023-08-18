import { createReducer } from '@reduxjs/toolkit';
import { EmployeeType, addEmployee, deleteEmployee, editEmployee } from '../actions/employeeAction';

const initialState = [
  {
    employee: {
      id: 1,
      name: 'John Paul',
      email: 'johnpaul@gmai.com',
      role: 'Developer',
      status: true,
      address: {
        line1: '123 Flat',
        line2: 'ABC Place',
        pincode: '686666'
      },
      department: 1
    }
  },
  {
    employee: {
      id: 2,
      name: 'Logan Walker',
      email: 'loganwalker@gmai.com',
      role: 'HR',
      status: true,
      address: {
        line1: '123 Flat',
        line2: 'ABC Place',
        pincode: '686666'
      },
      department: 2
    }
  },
  {
    employee: {
      id: 3,
      name: 'Dominic Toretto',
      email: 'dominictoretto@gmai.com',
      role: 'Admin',
      status: false,
      address: {
        line1: '123 Flat',
        line2: 'ABC Place',
        pincode: '686666'
      },
      department: 3
    }
  }
] as Array<EmployeeType>;

export const employeeReducer = createReducer(initialState, (builder) => {
  builder.addCase(addEmployee, (state, action) => {
    state = [...state, action.payload];

    return state;
  });
  builder.addCase(editEmployee, (state, action) => {
    const index = state.filter((obj) => obj.employee.id !== action.payload.employee.id);

    state = [...index, action.payload];

    return state;
  });
  builder.addCase(deleteEmployee, (state, action) => {
    state = state.filter((obj) => obj.employee.id !== action.payload.employee.id);

    return state;
  });
});

// export const employeeReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'EMPLOYEE:CREATE': {
//       const newState = [...state, action.payload.employee];

//       return newState;
//     }
//     case 'EMPLOYEE:EDIT': {
//       const index = [...state].filter((employee) => employee.id !== action.payload.employee.id);

//       const newState = [...index, action.payload.employee];

//       return newState;
//     }
//     case 'EMPLOYEE:DELETE': {
//       const newState = state.filter((employee) => employee.id !== action.payload.employee.id);

//       return newState;
//     }
//     default:
//       return state;
//   }
// };
