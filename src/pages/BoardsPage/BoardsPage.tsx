import { useState, useEffect } from 'react';
import { fetchBoards } from './api/fetchBoards';

import AddBoardForm from '@widgets/AddBoardForm/AddBoardForm';
import BoardItem from '@shared/BoardItem/BoardItem';

import { IBoardResponse } from './model/fetchBoardResponse';

import styles from './BoardsPage.module.css';

export default function BoardsPage() {
  const [boardsList, setBoardsList] = useState<IBoardResponse>([]);

  useEffect(() => {
    const getBoards = async () => {
      const boards = await fetchBoards();
      setBoardsList(boards);
    };
    getBoards();
  }, []);

  return (
    <main className={styles.container}>
      <AddBoardForm />
      <ul className={styles.boardsList}>
        {boardsList?.map(board => {
          return <BoardItem key={board.id} id={board.id} title={board.name} />;
        })}
      </ul>
    </main>
  );
}
