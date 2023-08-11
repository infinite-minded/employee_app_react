import { type FC } from 'react';
import './styles.css';

const Header: FC = () => {
  return (
    <div className='header'>
      <img className='logo' src='assets/img/kv-logo.png'></img>
    </div>
  );
};

export default Header;
