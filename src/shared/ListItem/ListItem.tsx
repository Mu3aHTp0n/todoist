import styles from './ListItems.module.css'

interface Props {
  itemTitle: string,
  status: boolean
}

export default function ListItem({itemTitle, status}: Props) {
  return (
    <div className={`${styles.container} ${status ? styles.active : styles.disable}`}>{itemTitle}</div>
  )
}
