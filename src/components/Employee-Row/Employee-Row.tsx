import React from 'react';
import './styles.css';
import Status from '../Status/Status';
import { useNavigate } from 'react-router-dom';

type EmployeeRowPropType = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: boolean;
  address: string;
};

const EmployeeRow: React.FC<EmployeeRowPropType> = (props) => {
  const { id, name, email, role, status, address } = props;
  const navigate = useNavigate();

  return (
    <div className='employeeDetails' onClick={() => navigate(`/employees/${id}`)}>
      <div className='attribs'>{name}</div>
      <div className='attribs'>{email}</div>
      <div className='attribs'>{role}</div>
      <div className='attribs'>
        <Status type={status} />
      </div>
      <div className='attribs'>{address}</div>
      <div className='attribs actionButtons'>
        <button className='actionButton'>
          <img className='deleteIcon' src='/assets/icons/delete-button.svg'></img>
        </button>
        <button className='actionButton'>
          <img className='editIcon' src='/assets/icons/edit-button.svg'></img>
        </button>
      </div>
    </div>
  );
};

export default EmployeeRow;
