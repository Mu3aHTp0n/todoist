import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchList } from './api/fetchLists';

import List from '@widgets/List/List';
import AddListForm from '@widgets/AddListForm/AddListForm';

import styles from './BoardPage.module.css';
import { IListResponse } from './model/fetchListsResponse';

export default function BoardPage() {
  const { id } = useParams();

  const [list, setList] = useState<IListResponse>();

  useEffect(() => {
    if (!id) return;
    const getLists = async () => {
      const response = await fetchList(id);
      setList(response);
    };
    getLists();
  }, [id]);

  const allList = list?.map(list => {
    return (
      <List key={list.id} boardId={id} listId={list.id} title={list.name} />
    );
  });

  return (
    <div className={styles.container}>
      {/* <h3>Доска: {currentBoard[0].title}</h3> */}
      <section className={styles.list__container}>
        {allList}
        <AddListForm boardId={id} />
      </section>
    </div>
  );
}
