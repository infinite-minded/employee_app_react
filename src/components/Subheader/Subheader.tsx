import React from 'react';
import './styles.css';
import ControlButton from '../Control-Button/Control-Button';

type SubheaderPropType = {
  heading: string;
  controlButtonText: string;
  type: string;
};

const Subheader: React.FC<SubheaderPropType> = (props) => {
  return (
    <div className='subheader'>
      <div className='heading'>{props.heading}</div>
      <div className='subheader-items'>
        {props.type !== 'none' && (
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
