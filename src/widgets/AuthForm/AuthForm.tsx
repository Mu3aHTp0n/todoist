import { useState } from 'react';

import { login } from './api/login';

export default function AuthForm() {
  const [authData, setAuthData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await login(authData);
      setError('');
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div>
      <form onSubmit={event => handleSubmit(event)}>
        <input
          type='email'
          placeholder='Почта'
          required
          value={authData.email}
          onChange={event =>
            setAuthData({ ...authData, email: event.target.value })
          }
        />
        <input
          type='password'
          placeholder='Пароль'
          required
          value={authData.password}
          onChange={event =>
            setAuthData({ ...authData, password: event.target.value })
          }
        />
        {error && <p></p>}
        <button>Войти</button>
      </form>
    </div>
  );
}
