import type { FC } from 'react';
import './styles/global.css';
import Login from './pages/login/login';
import ListEmployee from './pages/employee/List-Employee';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ViewEmployee from './pages/employee/View-Employee';
import EmployeeForm from './pages/employee/Employee-Form';

const App: FC = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/employees' element={<ListEmployee />} />
          <Route path='/employees/:id' element={<ViewEmployee />} />
          <Route path='/employees/create' element={<EmployeeForm />} />
          <Route path='/employees/:id/edit' element={<EmployeeForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
