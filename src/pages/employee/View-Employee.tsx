import React from 'react';
import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import './styles.css';
import EmployeeLayout from '../../layout/Employee-Layout';
import ViewEmployeeGrid from '../../components/View-Employee-Grid/View-Employee-Grid';
import { useGetEmployeeByIdQuery } from './api';

const ViewEmployee: React.FC = () => {
  const { id } = useParams();
  // const employeesData = useSelector((state: any) => {
  //   return state.employees;
  // });
  // const emp = employeesData.find((e) => Number(id) === e.employee.id);
  // const employee = emp.employee;
  const { data: employee, isSuccess } = useGetEmployeeByIdQuery(Number(id));
  // const address =
  //   employee.address.line1 + ', ' + employee.address.line2 + ', ' + employee.address.pincode;

  return (
    <>
      {isSuccess && employee.data ? (
        <div className='employeeListContainer'>
          <EmployeeLayout type='viewmenu' heading='Employee Details' controlButtonText='Edit'>
            <div className='viewEmployeeContainer'>
              <ViewEmployeeGrid text={employee.data.name} label='Employee Name' />
              <ViewEmployeeGrid text={employee.data.email} label='Employee Email' />
              <ViewEmployeeGrid text={employee.data.role} label='Role' />
              <ViewEmployeeGrid text={employee.data.department.name} label='Department' />
              <div className='statusGrid'>
                <ViewEmployeeGrid label='Status' text={employee.data.status.toString()} />
              </div>
              <ViewEmployeeGrid
                text={
                  employee.data.address.line1 +
                  ', ' +
                  employee.data.address.line2 +
                  ', ' +
                  employee.data.address.pincode
                }
                label='Address'
              />
              <ViewEmployeeGrid text={id} label='Employee ID' />
            </div>
          </EmployeeLayout>
        </div>
      ) : null}
    </>
  );
};

export default ViewEmployee;
