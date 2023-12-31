import './styles.css';
import React from 'react';

export type InputPropTypes = {
  setValue?: (e) => void;
  value?: string;
  label: string;
  type: 'text' | 'password';
};

const Input: React.FC<InputPropTypes> = (props) => {
  return (
    <div className='input'>
      <input
        value={props.value}
        className='inputField'
        type={props.type}
        onChange={props.setValue}
        data-testid='input-test'
      ></input>
      {!props.value && <label className='inputLabel'>{props.label}</label>}
    </div>
  );
};

export default Input;
