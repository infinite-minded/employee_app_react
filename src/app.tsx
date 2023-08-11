import type { FC } from 'react';
import './styles/global.css';
import Login from './pages/login/login';
import ListEmployee from './pages/employee/List-Employee';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const App: FC = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/employees' element={<ListEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
