import React from 'react';
import './styles.css';
import Status from '../Status/Status';

type EmployeeDetailsPropType = {
  name: string;
  email: string;
  role: string;
  status: boolean;
  address: string;
};

const EmployeeDetails: React.FC<EmployeeDetailsPropType> = (props) => {
  const { name, email, role, status, address } = props;

  return (
    <div className='employeeDetails'>
      <div className='attribs'>{name}</div>
      <div className='attribs'>{email}</div>
      <div className='attribs'>{role}</div>
      <div className='attribs'>
        <Status type={status} />
      </div>
      <div className='attribs'>{address}</div>
      <div className='attribs'>
        <button className='deleteButton'></button>
        <button className='editButton'></button>
      </div>
    </div>
  );
};

export default EmployeeDetails;
