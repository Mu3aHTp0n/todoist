import { useState } from 'react';
import { useBoardsStore } from '../../store/BoardsStore';

import { IList } from '@store/type';

import styles from './List.module.css';

import ListItem from '@shared/ListItem/ListItem';

interface Props {
  boardId: string;
  listId: string;
  title: string;
  currentList: IList;
}

export default function List({ boardId, listId, title, currentList }: Props) {
  const addListItemStore = useBoardsStore(state => state.addListItem);
  const [formValue, setFormValue] = useState('');

  function addListItem() {
    addListItemStore(boardId, listId, formValue);
    setFormValue('');
  }

  const listItems = currentList?.map(listItem => {
    return (
      <ListItem
        boardId={boardId}
        listId={listId}
        itemId={listItem.id}
        itemTitle={listItem.description}
        status={listItem.status}
      />
    );
  });

  return (
    <section className={styles.container}>
      <h3>{title}</h3>
      <hr className={styles.separator} />
      <form onSubmit={event => event.preventDefault()}>
        <input
          type='text'
          required
          placeholder='Введите что-нибудь'
          value={formValue}
          onChange={event => setFormValue(event.target.value)}
        />
        <button onClick={addListItem}>Save</button>
      </form>
      <div className={styles.itemsList}>{listItems}</div>
    </section>
  );
}
