import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './styles.css';
import EmployeeLayout from '../../layout/Employee-Layout';
import ViewEmployeeGrid from '../../components/View-Employee-Grid/View-Employee-Grid';

const ViewEmployee: React.FC = () => {
  const { id } = useParams();
  const employeesData = useSelector((state: any) => {
    return state.employees;
  });
  const emp = employeesData.find((e) => Number(id) === e.employee.id);
  const employee = emp.employee;
  const address =
    employee.address.line1 + ', ' + employee.address.line2 + ', ' + employee.address.pincode;

  return (
    <div className='employeeListContainer'>
      <EmployeeLayout type='viewmenu' heading='Employee Details' controlButtonText='Edit'>
        <div className='viewEmployeeContainer'>
          <ViewEmployeeGrid text={employee.name} label='Employee Name' />
          <ViewEmployeeGrid text={employee.email} label='Employee Email' />
          <ViewEmployeeGrid text={employee.role} label='Role' />
          <ViewEmployeeGrid text={employee.department} label='Department' />
          <div className='statusGrid'>
            <ViewEmployeeGrid label='Status' text={employee.status.toString()} />
          </div>
          <ViewEmployeeGrid text={address} label='Address' />
          <ViewEmployeeGrid text={id} label='Employee ID' />
        </div>
      </EmployeeLayout>
    </div>
  );
};

export default ViewEmployee;
