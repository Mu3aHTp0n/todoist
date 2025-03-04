import { useState } from 'react';

import { registration } from './api/registration';

import styles from './RegistrationForm.module.css';

export default function RegistrationForm() {
  const [regData, setRegData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const [error, setError] = useState<string[]>([]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await registration(regData);
      location.reload();
      setError([]);
    } catch (error) {
      if (typeof error !== 'string') {
        setError(
          error?.map(error => {
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
        <h3>Регистрация</h3>
        <input
          type='email'
          placeholder='Почта'
          required
          value={regData.email}
          onChange={event =>
            setRegData({ ...regData, email: event.target.value })
          }
        />
        <input
          type='password'
          placeholder='Пароль'
          required
          value={regData.password}
          onChange={event =>
            setRegData({ ...regData, password: event.target.value })
          }
        />
        <input
          type='text'
          placeholder='Имя'
          required
          value={regData.name}
          onChange={event =>
            setRegData({ ...regData, name: event.target.value })
          }
        />
        {error && <ul style={{ color: 'red', fontWeight: 700 }}>{error}</ul>}
        <button style={{ width: '100%' }}>Отправить</button>
      </form>
    </div>
  );
}
