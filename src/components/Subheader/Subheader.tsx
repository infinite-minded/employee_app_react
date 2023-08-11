import React from 'react';
import './styles.css';
import ControlButton from '../Control-Button/Control-Button';

const Subheader: React.FC = () => {
  return (
    <div className='subheader'>
      <div className='heading'>Employee List</div>
      <div className='subheader-items'>
        <ControlButton></ControlButton>
      </div>
    </div>
  );
};

export default Subheader;
