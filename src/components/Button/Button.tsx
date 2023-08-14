import React from 'react';
import './styles.css';

export type ButtonPropTypes = {
  type: 'button' | 'submit';
  text: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonPropTypes> = (props) => {
  const { type, text, onClick } = props;

  return (
    <div>
      <button className='loginButton' type={type} onClick={onClick} data-testid='button-test'>
        {text}
      </button>
    </div>
  );
};

export default Button;
