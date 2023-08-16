import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { useState, type FC, useEffect } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from './api';

const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setError] = useState(false);
  const navigate = useNavigate();
  const [login, { data: response, isSuccess }] = useLoginMutation();
  const handleLogin = () => {
    if (email && password)
      login({
        email: email,
        password: password
      });
    else setError(true);
  };
  // const handleClick = () => {
  //   if (email && password) navigate('/employees');
  //   else setError(true);
  // };

  useEffect(() => {
    if (isSuccess && response) {
      localStorage.setItem('authToken', response.data.token);
      navigate('/employees');
    }
  }, [response, isSuccess]);

  return (
    <div className='container'>
      <section className='left'>
        <img className='banner' src='/assets/img/banner.png'></img>
      </section>
      <section className='right'>
        <div className='form'>
          <img className='logo' src='/assets/img/kv-logo.png'></img>
          <Input
            value={email}
            type='text'
            label='Email'
            setValue={(e) => setEmail(e.target.value)}
          />
          <Input
            value={password}
            type='password'
            label='Password'
            setValue={(e) => setPassword(e.target.value)}
          />
          <Button type='button' text='Login' onClick={handleLogin} />
          {showError && <div className='invalid'>Invalid input</div>}
        </div>
      </section>
    </div>
  );
};

export default Login;
