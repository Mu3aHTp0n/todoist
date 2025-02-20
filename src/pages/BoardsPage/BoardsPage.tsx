import { fetchBoards } from './api/fetchBoards';

import AddBoardForm from '@widgets/AddBoardForm/AddBoardForm';
import BoardItem from '@shared/BoardItem/BoardItem';

import styles from './BoardsPage.module.css';
import { useState, useEffect } from 'react';

export default function BoardsPage() {
  const [boardsList, setBoardsList] = useState([]);

  useEffect(() => {
    const getBoards = async () => {
      const boards = await fetchBoards();
      const boardList = boards?.map(board => {
        return <BoardItem id={board.id} key={board.id} title={board.name} />;
      });
      console.log(boards);
      setBoardsList(boardList);
    };
    getBoards();
  }, []);

  return (
    <main className={styles.container}>
      <AddBoardForm />
      <ul className={styles.boardsList}>{boardsList}</ul>
    </main>
  );
}
