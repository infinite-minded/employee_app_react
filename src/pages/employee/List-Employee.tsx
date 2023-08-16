import React from 'react';
import { useSelector } from 'react-redux';
import EmployeeRow from '../../components/Employee-Row/Employee-Row';
import './styles.css';
import EmployeeLayout from '../../layout/Employee-Layout';

const ListEmployee: React.FC = () => {
  const employeesData = useSelector((state: any) => {
    //change any to a particular type - here it should be of type employee
    return state.employees; //since we named it as employees in index.js under src/reducers
  });

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
            key={obj.employee.id}
            id={obj.employee.id}
            name={obj.employee.name}
            email={obj.employee.email}
            role={obj.employee.role}
            status={obj.employee.status}
            address={
              obj.employee.address.line1 +
              ', ' +
              obj.employee.address.line2 +
              ', ' +
              obj.employee.address.pincode
            }
            department={obj.employee.department}
          ></EmployeeRow>
        ))}
      </EmployeeLayout>
    </div>
  );
};

export default ListEmployee;
