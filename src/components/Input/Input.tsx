import './styles.css';
import React from 'react';

type InputPropTypes = {
  setValue: (e) => void;
  label: string;
  type: 'text' | 'password';
};

const Input: React.FC<InputPropTypes> = (props) => {
  return (
    <div className='input'>
      <input className='inputField' type={props.type} onChange={props.setValue}></input>
      <label className='inputLabel'>{props.label}</label>
    </div>
  );
};

export default Input;
