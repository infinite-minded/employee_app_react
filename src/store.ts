import { configureStore } from '@reduxjs/toolkit';
import { employeeReducer } from './reducers/employeeReducer';
import baseApi from './services';

export const store = configureStore({
  reducer: {
    employees: employeeReducer,
    [baseApi.reducerPath]: baseApi.reducer
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), baseApi.middleware]
});
