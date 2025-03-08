import { useState } from 'react';

import { login } from './api/login';

import styles from './AuthForm.module.css';

export default function AuthForm() {
  const [authData, setAuthData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string[]>([]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await login(authData);
      location.reload();
      setError([]);
    } catch (error) {
      if (typeof error !== 'string') {
        setError(
          error.map(error => {
            return <li>{error}</li>;
          }),
        );
      }
      setError(error);
    }
  };
  return (
    <div>
      <form className={styles.form} onSubmit={event => handleSubmit(event)}>
        <h3>Авторизация</h3>
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
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button style={{ width: '100%' }}>Войти</button>
      </form>
    </div>
  );
}
