import { useState } from 'react';

import AuthForm from '@widgets/AuthForm/AuthForm';
import RegistrationForm from '@widgets/RegistrationForm/RegistrationForm';

import styles from './AuthPage.module.css';

export default function AuthPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => setIsFormOpen(!isFormOpen)}
      >
        Swap
      </button>
      {isFormOpen ? <RegistrationForm /> : <AuthForm />}
    </div>
  );
}
