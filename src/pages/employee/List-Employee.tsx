import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import React from 'react';
import SidebarButton from '../../components/Sidebar/Sidebar-Button';
import Subheader from '../../components/Subheader/Subheader';
import EmployeeDetails from '../../components/Employee-Details/Employee-Details';
import './styles.css';

const data = [
  {
    id: 1,
    name: 'John Paul',
    email: 'johnpaul@gmai.com',
    role: 'Developer',
    status: true,
    address: '123 Flat, ABC Place'
  },
  {
    id: 2,
    name: 'Logan Walker',
    email: 'loganwalker@gmai.com',
    role: 'HR',
    status: true,
    address: '123 Flat, ABC Place'
  },
  {
    id: 3,
    name: 'Dominic Toretto',
    email: 'dominictoretto@gmai.com',
    role: 'Admin',
    status: false,
    address: '123 Flat, ABC Place'
  }
];

const ListEmployee: React.FC = () => {
  return (
    <div className='employeeListContainer'>
      <Header />
      <Sidebar>
        <SidebarButton sideMenuText='Employee list' />
      </Sidebar>
      <Subheader />
      <div className='employeeAtrribs'>
        <div className='attribHeading'>Employee Name</div>
        <div className='attribHeading'>Employee Email</div>
        <div className='attribHeading'>Role</div>
        <div className='attribHeading'>
          <div className='statusHeadingText'>Status</div>
        </div>
        <div className='attribHeading'>Address</div>
        <div className='attribHeading'>Action</div>
      </div>
      {data.map((emp) => (
        <EmployeeDetails
          key={emp.id}
          name={emp.name}
          email={emp.email}
          role={emp.role}
          status={emp.status}
          address={emp.address}
        ></EmployeeDetails>
      ))}
    </div>
  );
};

export default ListEmployee;
