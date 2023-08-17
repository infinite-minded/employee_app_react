/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
// import { useSelector } from 'react-redux';
import EmployeeRow from '../../components/Employee-Row/Employee-Row';
import './styles.css';
import EmployeeLayout from '../../layout/Employee-Layout';
import { useGetEmployeeListQuery } from './api';

const ListEmployee: React.FC = () => {
  // const employeesData = useSelector((state: any) => {
  //   //change any to a particular type - here it should be of type employee
  //   return state.employees; //since we named it as employees in index.js under src/reducers
  // });
  const { data: employeesData, isSuccess } = useGetEmployeeListQuery('');

  return (
    <div className='employeeListContainer'>
      <EmployeeLayout type='listmenu' heading='Employee List' controlButtonText='Create employee'>
        <div className='employeeAtrribs'>
          <div className='attribHeading'>Employee Name</div>
          <div className='attribHeading'>Employee Email</div>
          <div className='attribHeading'>Role</div>
          <div className='attribHeading'>Department</div>
          <div className='attribHeading'>
            <div className='statusHeadingText'>Status</div>
          </div>
          <div className='attribHeading'>Address</div>
          <div className='attribHeading'>Action</div>
        </div>
        {isSuccess && employeesData.data
          ? employeesData.data.map((obj) => (
              <EmployeeRow
                key={obj.id}
                id={obj.id}
                name={obj.name}
                email={obj.email}
                role={obj.role}
                status={obj.status}
                address={obj.address.line1 + ', ' + obj.address.line2 + ', ' + obj.address.pincode}
                department={obj.department.name}
              ></EmployeeRow>
            ))
          : null}
      </EmployeeLayout>
    </div>
  );
};

export default ListEmployee;
