import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useBoardsStore } from "@store/BoardsStore"
// import { useBoardsStore } from "../../store/BoardsStore"

export default function BoardPage() {
  const { name } = useParams();
  const [list, setList] = useState([])
  const boards = useBoardsStore(state => state.boards);

  let listLength = 0;

	useEffect(() => {
		if(!name) return
    const currentBoard = boards.filter(board => board.title === name);
    setList(currentBoard.list)
    listLength = list.length
	},[name])

  return (
    <div>
      <p>Доска: <span>{name}</span></p>
      <p>Количество списков: <span>{listLength}</span></p>
      <p>Списки: <span>{list?.map(item => {return item})}</span></p>
    </div>
  )
}
