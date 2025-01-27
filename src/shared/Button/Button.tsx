import styles from './Button.module.css'

interface Props {
    color?: string,
    text: string,
    handleClick: () => void
}

export default function Button({color, text, handleClick}: Props) {
  return (
    <button className={color === 'primary' ? styles.primary : styles.secondary} onClick={handleClick}>
        {text}
    </button>
  )
}
