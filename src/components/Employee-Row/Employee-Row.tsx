import React, { useState } from 'react';
import './styles.css';
import Status from '../Status/Status';
import { useNavigate } from 'react-router-dom';
import { useDeleteEmployeeByIdMutation } from '../../pages/employee/api';
// import { useDispatch } from 'react-redux';
// import { deleteEmployee } from '../../actions/employeeAction';

type EmployeeRowPropType = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: boolean;
  address: string;
  department: string;
};

const EmployeeRow: React.FC<EmployeeRowPropType> = (props) => {
  const { id, name, email, role, status, address, department } = props;
  const navigate = useNavigate();
  const navigateToDetails = () => navigate(`/employees/${id}`);
  const [deleteClicked, setDeleteClicked] = useState(false);
  // const dispatch = useDispatch();
  const [deleteEmployee] = useDeleteEmployeeByIdMutation();
  const handleDelete = () => {
    deleteEmployee(Number(id));
    // dispatch(deleteEmployee({ employee: { id: Number(id) } }));
    setDeleteClicked(false);
    navigate('/employees');
  };

  return (
    <>
      {deleteClicked ? (
        <div className='deleteBoxContainer'>
          <div className='deleteBox'>
            <div className='closeDeleteBox'>
              <button
                className='closeDeleteBoxButton'
                type='button'
                onClick={() => setDeleteClicked(false)}
              >
                X
              </button>
            </div>
            <div className='areYouSure'>Are you sure ?</div>
            <div className='confirmQuestion'>Do you really want to delete employee?</div>
            <div className='deleteBoxButtons'>
              <button className='deleteBoxConfirm' type='button' onClick={handleDelete}>
                Confirm
              </button>
              <button
                className='deleteBoxCancel'
                type='button'
                onClick={() => setDeleteClicked(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
      <div className='employeeDetails'>
        <div className='attribs' onClick={navigateToDetails}>
          {name}
        </div>
        <div className='attribs' onClick={navigateToDetails}>
          {email}
        </div>
        <div className='attribs' onClick={navigateToDetails}>
          {role}
        </div>
        <div className='attribs' onClick={navigateToDetails}>
          {department}
        </div>
        <div className='attribs' onClick={navigateToDetails}>
          <Status type={status} />
        </div>
        <div className='attribs' onClick={navigateToDetails}>
          {address}
        </div>
        <div className='attribs actionButtons'>
          <button className='actionButton' onClick={() => setDeleteClicked(true)}>
            <img className='deleteIcon' src='/assets/icons/delete-button.svg'></img>
          </button>
          <button className='actionButton' onClick={() => navigate(`/employees/${id}/edit`)}>
            <img className='editIcon' src='/assets/icons/edit-button.svg'></img>
          </button>
        </div>
      </div>
    </>
  );
};

export default EmployeeRow;
