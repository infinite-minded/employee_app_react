import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { useState, type FC } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const Login: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setError] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    if (username && password) navigate('/employees');
    else setError(true);
  };

  return (
    <div className='container'>
      <section className='left'>
        <img className='banner' src='assets/img/banner.png'></img>
      </section>
      <section className='right'>
        <div className='form'>
          <img className='logo' src='assets/img/kv-logo.png'></img>
          <Input type='text' label='Username' setValue={(e) => setUsername(e.target.value)} />
          <Input type='password' label='Password' setValue={(e) => setPassword(e.target.value)} />
          <Button type='button' text='Login' onClick={handleClick} />
          {showError && <div className='invalid'>Invalid input</div>}
        </div>
      </section>
    </div>
  );
};

export default Login;
