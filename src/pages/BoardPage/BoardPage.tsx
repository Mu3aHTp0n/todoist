import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useBoardsStore } from '@store/BoardsStore';

import styles from './BoardPage.module.css';

import List from '@widgets/List/List';
import AddListForm from '@widgets/AddListForm/AddListForm';

export default function BoardPage() {
  const { id } = useParams();
  const boards = useBoardsStore(state => state.boards);
  const currentBoard = boards.filter(board => board.id === id);

  const [list, setList] = useState([]);

  useEffect(() => {
    if (!id) return;

    const currentBoard = boards.filter(board => board.id === id);
    if (currentBoard.length > 0) {
      setList(currentBoard[0].list);
    } else {
      console.error(`Board with id ${id} not found`);
      setList([]);
    }
  }, [id, boards]);

  const allList = list?.map(list => {
    return (
      <List
        key={list.id}
        boardId={currentBoard[0].id}
        listId={list.id}
        title={list.title}
        currentList={list.listItem}
      />
    );
  });

  return (
    <div className={styles.container}>
      <h3>Доска: {currentBoard[0].title}</h3>
      {allList}
      <AddListForm boardId={id} />
    </div>
  );
}
