/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import './styles.css';
import EmployeeLayout from '../../layout/Employee-Layout';
import Input from '../../components/Input/Input';
import { useParams } from 'react-router-dom';
import data from '../../constants/data';

const EmployeeForm: React.FC = () => {
  const { id } = useParams();
  const employee = data.find((e) => Number(id) === e.id);
  const [name, setName] = useState(id ? employee.name : '');
  const [email, setEmail] = useState(id ? employee.email : '');
  const [role, setRole] = useState(id ? employee.role : '');
  const [status, setStatus] = useState(id ? employee.status : true);
  const [address, setAddress] = useState(id ? employee.address : '');
  const [department, setDepartment] = useState('');

  return (
    <div className='employeeListContainer'>
      <EmployeeLayout
        type='none'
        heading={id ? 'Edit Employee' : 'Create Employee'}
        controlButtonText=''
      >
        <div className='createEmployeeContainer'>
          <div className='formContainer'>
            <Input
              type='text'
              value={id ? name : name ? name : ''}
              label='Employee Name'
              setValue={(e) => setName(e.target.value)}
            />
            <Input
              type='text'
              value={id ? email : email ? email : ''}
              label='Employee Email'
              setValue={(e) => setEmail(e.target.value)}
            />
            <Input
              type='text'
              value={id ? role : role ? role : ''}
              label='Employee Role'
              setValue={(e) => setRole(e.target.value)}
            />
            <Input type='text' label='Department' setValue={(e) => setDepartment(e.target.value)} />
            <Input
              type='text'
              value={id ? address : address ? address : null}
              label='Employee Address'
              setValue={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className='createEmployeeButtons'>
            <button className='createEmployeeCreateButton' type='button'>
              {id ? 'Save' : 'Create'}
            </button>
            <button className='createEmployeeCancelButton' type='button'>
              Cancel
            </button>
          </div>
        </div>
      </EmployeeLayout>
    </div>
  );
};

export default EmployeeForm;
