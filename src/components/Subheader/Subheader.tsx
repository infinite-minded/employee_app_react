import React from 'react';
import './styles.css';
import ControlButton from '../Control-Button/Control-Button';

type SubheaderPropType = {
  heading: string;
  controlButtonText: string;
  type: string;
};

const Subheader: React.FC<SubheaderPropType> = (props) => {
  const employeeRole = localStorage.getItem('employeeRole');

  return (
    <div className={`subheader ${employeeRole !== 'Admin' && employeeRole !== 'HR' && 'disabled'}`}>
      <div className='heading'>{props.heading}</div>
      <div className='subheader-items'>
        {props.type !== 'none' && (employeeRole === 'HR' || employeeRole === 'Admin') && (
          <ControlButton
            type={props.type}
            controlButtonText={props.controlButtonText}
          ></ControlButton>
        )}
      </div>
    </div>
  );
};

export default Subheader;
