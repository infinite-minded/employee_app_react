const initialState = [
  {
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
    department: 'A'
  },
  {
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
    department: 'B'
  },
  {
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
    department: 'C'
  }
];

export const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EMPLOYEE:CREATE': {
      const newState = [...state, action.payload.employee];

      return newState;
    }
    default:
      return state;
  }
};
