/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import './styles.css';
import EmployeeLayout from '../../layout/Employee-Layout';
import Input from '../../components/Input/Input';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Dropdown from '../../components/Dropdown/Dropdown';
// import { addEmployee, editEmployee } from '../../actions/employeeAction';
import {
  useCreateEmployeeMutation,
  useEditEmployeeMutation,
  useGetDepartmentListQuery,
  useGetRoleListQuery,
  useLazyGetEmployeeByIdQuery
} from './api';
import { deepStrictEqual } from 'assert';

const EmployeeForm: React.FC = () => {
  const { id } = useParams();
  // const employeesData = useSelector((state: any) => {
  //   return state.employees;
  // });
  // const emp = employeesData.find((e) => Number(id) === e.employee.id);
  // const employee = id ? emp.employee : null;
  const [createEmployee] = useCreateEmployeeMutation();
  const [editEmployee] = useEditEmployeeMutation();
  const [getEmployee, { data: response }] = useLazyGetEmployeeByIdQuery();
  const { data: departmentJSON, isSuccess: departmentResponseSuccess } =
    useGetDepartmentListQuery('');
  const { data: roleJSON, isSuccess: roleResponseSuccess } = useGetRoleListQuery('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('true');
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [pincode, setPincode] = useState('');
  const [department, setDepartment] = useState('');
  const [departmentIds, setDepartmentIds] = useState([]);
  const [roles, setRoles] = useState([]);
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) getEmployee(Number(id));
  }, []);

  useEffect(() => {
    if (departmentResponseSuccess && departmentJSON?.data) {
      const deps = [];

      departmentJSON.data.map((dep) => {
        deps.push({ key: dep.id.toString(), value: dep.name });
      });
      console.log(deps);
      setDepartmentIds(deps);
    }
  }, [departmentJSON]);

  useEffect(() => {
    if (roleResponseSuccess && roleJSON?.data) {
      const roleObjects = [];

      Object.entries(roleJSON.data).map(([index, role]) => {
        roleObjects.push({ key: role, value: role });
      });

      console.log(roleObjects);
      setRoles(roleObjects);
    }
  }, [roleJSON]);

  useEffect(() => {
    if (response?.data) {
      setName(response.data.name);
      setEmail(response.data.email);
      setRole(response.data.role);
      setStatus(response.data.status.toString());
      setLine1(response.data.address.line1);
      setLine2(response.data.address.line2);
      setPincode(response.data.address.pincode);
      setDepartment(response.data.department.id.toString());
    }
  }, [response]);

  const handleSubmit = () => {
    id
      ? editEmployee({
          id: Number(id),
          name: name,
          email: email,
          password: password,
          role: role,
          status: status === 'active' ? true : false,
          address: {
            line1: line1,
            line2: line2,
            pincode: pincode
          },
          department: {
            id: Number(department)
          }
        })
      : createEmployee({
          name: name,
          email: email,
          password: password,
          role: role,
          status: status === 'active' ? true : false,
          address: {
            line1: line1,
            line2: line2,
            pincode: pincode
          },
          department: {
            id: Number(department)
          }
        });
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
              value={name}
              label='Employee Name'
              setValue={(e) => setName(e.target.value)}
            />
            <Input
              type='text'
              value={email}
              label='Employee Email'
              setValue={(e) => setEmail(e.target.value)}
            />
            <Input
              type='password'
              value={password}
              label='Employee Password'
              setValue={(e) => setPassword(e.target.value)}
            />
            <Dropdown
              value={department}
              label='Department'
              onChange={(e) => setDepartment(e.target.value)}
              options={departmentIds}
            />
            <Dropdown
              value={role}
              label='Role'
              onChange={(e) => setRole(e.target.value)}
              options={roles}
            />
            <Dropdown
              value={status === 'true' || status === 'active' ? 'active' : 'inactive'}
              label='Status'
              onChange={(e) => setStatus(e.target.value)}
              options={[
                { key: 'active', value: 'active' },
                { key: 'inactive', value: 'inactive' }
              ]}
            />
            <div className='addressFormContainer'>
              <Input
                type='text'
                value={line1}
                label='Address Line 1'
                setValue={(e) => setLine1(e.target.value)}
              />
              <Input
                type='text'
                value={line2}
                label='Line 2'
                setValue={(e) => setLine2(e.target.value)}
              />
              <Input
                type='text'
                value={pincode}
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
