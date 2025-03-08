import { useEffect } from 'react';
import { useBoardsStore } from '../../store/BoardsStore.ts';

import { fetchBoards } from './api/fetchBoards';

import AddBoardForm from '@widgets/AddBoardForm/AddBoardForm';
import BoardItem from '@shared/BoardItem/BoardItem';

import styles from './BoardsPage.module.css';

export default function BoardsPage() {
  const boards = useBoardsStore(state => state.boards);
  const setBoards = useBoardsStore(state => state.setBoards);

  useEffect(() => {
    const getBoards = async () => {
      const boards = await fetchBoards();
      setBoards(boards)
    };
    getBoards();
  }, []);

  return (
    <main className={styles.container}>
      <AddBoardForm />
      <ul className={styles.boardsList}>
        {boards?.map(board => {
          return <BoardItem key={board.id} id={board.id} title={board.name} />;
        })}
      </ul>
    </main>
  );
}
