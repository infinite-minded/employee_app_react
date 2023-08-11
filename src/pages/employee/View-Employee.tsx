import React from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';
import EmployeeLayout from '../../layout/Employee-Layout';
import ViewEmployeeGrid from '../../components/View-Employee-Grid/View-Employee-Grid';
import data from '../../constants/data';

const ViewEmployee: React.FC = () => {
  const { id } = useParams();
  const employee = data.find((e) => Number(id) === e.id);

  return (
    <div className='employeeListContainer'>
      <EmployeeLayout type='viewmenu' heading='Employee Details' controlButtonText='Edit'>
        <div className='viewEmployeeContainer'>
          <ViewEmployeeGrid text={employee.name} label='Employee Name' />
          <ViewEmployeeGrid text={employee.email} label='Employee Email' />
          <ViewEmployeeGrid text={employee.role} label='Role' />
          <div className='statusGrid'>
            <ViewEmployeeGrid label='Status' text={employee.status.toString()} />
          </div>
          <ViewEmployeeGrid text={employee.address} label='Address' />
          <ViewEmployeeGrid text={id} label='Employee ID' />
        </div>
      </EmployeeLayout>
    </div>
  );
};

export default ViewEmployee;
