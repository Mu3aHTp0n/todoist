import { useState } from 'react';

import { registration } from './api/registration';

export default function RegistrationForm() {
  const [regData, setRegData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await registration(regData);
      localStorage.setItem('accessToken', response.data.token);
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
        {error && <p style={{ color: 'red', fontWeight: 700 }}>{error}</p>}
        <button>Отправить</button>
      </form>
    </div>
  );
}
