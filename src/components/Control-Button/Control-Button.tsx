import React from 'react';
import './styles.css';

const ControlButton: React.FC = () => {
  return (
    <button className='controlButton'>
      <div className='controlButtonParent'>
        <div className='controlButtonIcon'>+</div>
        <div className='controlButtonBox'>Create Employee</div>
      </div>
    </button>
  );
};

export default ControlButton;
