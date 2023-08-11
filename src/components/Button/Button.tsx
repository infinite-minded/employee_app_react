import React from 'react';
import './styles.css';

type ButtonPropTypes = {
  type: 'button' | 'submit';
  text: string;
  onClick: () => void;
};

const Button: React.FC<ButtonPropTypes> = (props) => {
  const { type, text, onClick } = props;

  return (
    <div className='button'>
      <button type={type} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;