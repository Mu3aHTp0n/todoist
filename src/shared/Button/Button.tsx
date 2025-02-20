import { ReactNode } from 'react';
import styles from './Button.module.css';

interface Props {
  color?: string;
  size?: string;
  children: ReactNode | string;
  handleClick?: () => void;
}

export default function Button({ color, size, children, handleClick }: Props) {
  return (
    <button
      className={`${size === '100%' ? styles.button_big : ''} ${color === 'primary' ? styles.primary : styles.secondary}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
