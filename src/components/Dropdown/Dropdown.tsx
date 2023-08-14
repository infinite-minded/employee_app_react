import './styles.css';
import React from 'react';

export type DropdownPropTypes = {
  onChange?: (e) => void;
  value?: string;
  label: string;
  options: string[];
};

const Dropdown: React.FC<DropdownPropTypes> = (props) => {
  return (
    <div className='dropdown'>
      <select value={props.value} className='dropdownField' onChange={props.onChange}>
        {props.options.map((optionVal) => (
          <>
            <option value={optionVal}>{optionVal}</option>
          </>
        ))}
      </select>
      <label className='dropdownLabel'>{props.label}</label>
    </div>
  );
};

export default Dropdown;
