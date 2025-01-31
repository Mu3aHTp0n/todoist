import { useBoardsStore } from '../../store/BoardsStore'

import { IList } from '@store/type'

import styles from './List.module.css'

import ListItem from '@shared/ListItem/ListItem'

interface Props {
  title: string,
  currentList: IList,
}

export default function List({title, currentList}: Props) {

  const listItemses = [
    {
      id: 0,
      title: 'Pfujkjdjr',
      status: true,
    },
    {
      id: 1,
      title: 'Заголовок',
      status: false,
    },
    {
      id: 2,
      title: 'kuru kuru',
      status: false,
    },
  ]

  const listItems = listItemses?.map(listItem => {    
    return <ListItem itemTitle={listItem.title} status={listItem.status} />
  })

  return (
    <section className={styles.container}>
      <h3>{title}</h3>
			<hr className={styles.separator} />
			{/* Кнопка для добавления нового итема */}
      <div className={styles.itemsList}>
			  { listItems }
      </div>
    </section>
  )
}