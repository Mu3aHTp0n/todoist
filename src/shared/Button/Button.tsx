import { ReactNode } from 'react'
import styles from './Button.module.css'

interface Props {
    color?: string,
    children: ReactNode | string,
    handleClick: () => void
}

export default function Button({color, children, handleClick}: Props) {
  return (
    <button className={color === 'primary' ? styles.primary : styles.secondary} onClick={handleClick}>
        {children}
    </button>
  )
}
