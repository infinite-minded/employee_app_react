import { type FC } from 'react';
import './styles.css';

const Header: FC = () => {
  return (
    <div className='header'>
      <div className='logoDiv'>
        <img className='logo' src='/assets/img/kv-logo.png'></img>
      </div>
    </div>
  );
};

export default Header;
