import React from 'react';
import EmployeeDetails from '../../components/Employee-Details/Employee-Details';
import './styles.css';
import EmployeeLayout from '../../layout/Employee-Layout';

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
      <EmployeeLayout>
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
      </EmployeeLayout>
    </div>
  );
};

export default ListEmployee;
