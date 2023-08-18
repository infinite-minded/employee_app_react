import './styles.css';
import React from 'react';

export type DropdownPropTypes = {
  onChange?: (e) => void;
  value?: string;
  label: string;
  options: { key: string; value: string }[];
};

const Dropdown: React.FC<DropdownPropTypes> = (props) => {
  return (
    <div className='dropdown'>
      <select value={props.value} className='dropdownField' onChange={props.onChange}>
        {props.options.map((obj) => (
          <>
            <option value={obj.key}>{obj.value}</option>
          </>
        ))}
      </select>
      <label className='dropdownLabel'>{props.label}</label>
    </div>
  );
};

export default Dropdown;
