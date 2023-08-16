/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.css';
import EmployeeLayout from '../../layout/Employee-Layout';
import Input from '../../components/Input/Input';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Dropdown from '../../components/Dropdown/Dropdown';
import { addEmployee, editEmployee } from '../../actions/employeeAction';

const EmployeeForm: React.FC = () => {
  const { id } = useParams();
  const employeesData = useSelector((state: any) => {
    return state.employees;
  });
  const emp = employeesData.find((e) => Number(id) === e.employee.id);
  const employee = id ? emp.employee : null;
  const [name, setName] = useState(id ? employee.name : '');
  const [email, setEmail] = useState(id ? employee.email : '');
  const [role, setRole] = useState(id ? employee.role : '');
  const [status, setStatus] = useState(id ? employee.status : '');
  const [line1, setLine1] = useState(id ? employee.address.line1 : '');
  const [line2, setLine2] = useState(id ? employee.address.line2 : '');
  const [pincode, setPincode] = useState(id ? employee.address.pincode : '');
  const [department, setDepartment] = useState(id ? employee.department : '');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    id
      ? dispatch(
          editEmployee({
            employee: {
              id: Number(id),
              name: name,
              email: email,
              role: role,
              status: status === 'active' ? true : false,
              address: {
                line1: line1,
                line2: line2,
                pincode: pincode
              },
              department: Number(department)
            }
          })
        )
      : dispatch(
          addEmployee({
            employee: {
              id: 4,
              name: name,
              email: email,
              role: role,
              status: status === 'active' ? true : false,
              address: {
                line1: line1,
                line2: line2,
                pincode: pincode
              },
              department: Number(department)
            }
          })
        );
    navigate('/employees');
  };

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
            <Dropdown
              value={id ? department : ''}
              label='Department'
              onChange={(e) => setDepartment(e.target.value)}
              options={['Department', '1', '2', '3']}
            />
            <Dropdown
              value={id ? role : ''}
              label='Role'
              onChange={(e) => setRole(e.target.value)}
              options={['Role', 'Developer', 'HR', 'Admin']}
            />
            <Dropdown
              value={id ? status : ''}
              label='Status'
              onChange={(e) => setStatus(e.target.value)}
              options={['Status', 'active', 'inactive']}
            />
            <div className='addressFormContainer'>
              <Input
                type='text'
                value={id ? line1 : line1 ? line1 : null}
                label='Address Line 1'
                setValue={(e) => setLine1(e.target.value)}
              />
              <Input
                type='text'
                value={id ? line2 : line2 ? line2 : null}
                label='Line 2'
                setValue={(e) => setLine2(e.target.value)}
              />
              <Input
                type='text'
                value={id ? pincode : pincode ? pincode : null}
                label='Pincode'
                setValue={(e) => setPincode(e.target.value)}
              />
            </div>
          </div>
          <div className='createEmployeeButtons'>
            <button className='createEmployeeCreateButton' type='button' onClick={handleSubmit}>
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
