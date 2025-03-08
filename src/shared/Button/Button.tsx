import { ReactNode } from 'react';
import styles from './Button.module.css';

interface Props {
  color?: string;
  size?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  children: ReactNode | string;
  handleClick?: () => void;
}

export default function Button({ color, size, type='button', children, handleClick }: Props) {
  return (
    <button
      className={`${size === '100%' ? styles.button_big : ''} ${color === 'primary' ? styles.primary : styles.secondary}`}
      type={type}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
