// import Button from '@shared/Button'
import { useBoardsStore } from '@store/BoardsStore'

import styles from './BoardsPage.module.css'

import AddBoardForm from '@widgets/AddBoardForm/AddBoardForm'
import BoardItem from '@shared/BoardItem/BoardItem'

export default function BoardsPage() {
  const boards = useBoardsStore(state => state.boards)

  const boardsList = boards.map(board => {
    return <BoardItem id={board.id} key={board.id} title={board.title} />
  })

  return (
    <main className={styles.container}>
      <AddBoardForm />
      {/* <Button text='Удалить последнюю доску' handleClick={removeBoard}/> */}
      <ul className={styles.boardsList}>
        {boardsList}
      </ul>
    </main>
  )
}
