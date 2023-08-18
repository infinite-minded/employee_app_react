import React from 'react';
import './styles.css';
import Status from '../Status/Status';

type ViewEmployeeGridPropType = {
  label: string;
  text: string;
};

const ViewEmployeeGrid: React.FC<ViewEmployeeGridPropType> = (props) => {
  const { label, text } = props;

  if (label === 'Status')
    return (
      <div className='employeeGrid'>
        <div className='employeeGridLabel'>{label}</div>
        {text === 'true' && <Status type={true} />}
        {text === 'false' && <Status type={false} />}
      </div>
    );

  return (
    <div className='employeeGrid'>
      <div className='employeeGridLabel'>{label}</div>
      <div className='employeeGridValue'>{text}</div>
    </div>
  );
};

export default ViewEmployeeGrid;
