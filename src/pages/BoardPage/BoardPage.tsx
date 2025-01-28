import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useBoardsStore } from "@store/BoardsStore"
// import { useBoardsStore } from "../../store/BoardsStore"

import styles from './BoardPage.module.css'

export default function BoardPage() {
  const { name } = useParams();
  const [list, setList] = useState([])
  const boards = useBoardsStore(state => state.boards);
  let listLength = 0;

  const allLists = list?.map(list => {
    return <p>Компонент листа</p>
  })


	useEffect(() => {
		if(!name) return
    const currentBoard = boards.filter(board => board.title === name);
    setList(currentBoard.list)
    listLength = list.length
	},[name])

  return (
    <div className={styles.container}>
      <h3>Доска: {name}</h3>
      { allLists }
      {/* Форма для добавления нового листа */}
    </div>
  )
}
