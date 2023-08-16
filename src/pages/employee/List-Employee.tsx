/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
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

  const [employeesData, setData] = useState([]);
  const { data: response, isSuccess } = useGetEmployeeListQuery('');

  useEffect(() => {
    if (response && isSuccess) setData(response.data);
  }, [response, isSuccess]);

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
        {employeesData.map((obj) => (
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
        ))}
      </EmployeeLayout>
    </div>
  );
};

export default ListEmployee;
