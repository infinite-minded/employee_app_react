import React from 'react';
import EmployeeRow from '../../components/Employee-Row/Employee-Row';
import './styles.css';
import EmployeeLayout from '../../layout/Employee-Layout';
import data from '../../constants/data';

const ListEmployee: React.FC = () => {
  return (
    <div className='employeeListContainer'>
      <EmployeeLayout type='listmenu' heading='Employee List' controlButtonText='Create employee'>
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
          <EmployeeRow
            key={emp.id}
            id={emp.id}
            name={emp.name}
            email={emp.email}
            role={emp.role}
            status={emp.status}
            address={emp.address}
          ></EmployeeRow>
        ))}
      </EmployeeLayout>
    </div>
  );
};

export default ListEmployee;
