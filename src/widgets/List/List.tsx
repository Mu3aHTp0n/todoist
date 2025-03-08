import { useEffect, useState } from 'react';

import { ITaskResponse } from './model/fetchTasksResponse';

import ListItem from '@shared/ListItem/ListItem';
import { fetchTasks } from './api/fetchTasks';

import styles from './List.module.css';
import { createTask } from './api/createTask';

interface Props {
  boardId: string;
  listId: string;
  title: string;
}

export default function List({ boardId, listId, title }: Props) {
  const [formValue, setFormValue] = useState('');
  const [taskList, setTaskList] = useState<ITaskResponse>([]);

  function addListItem() {
    createTask(formValue, listId);
    setFormValue('');
  }

  useEffect(() => {
    const getTasks = async () => {
      const response = await fetchTasks(boardId, listId);
      console.log(response);
      const listItems = response?.map(listItem => {
        return (
          <ListItem
            key={listItem.id}
            boardId={boardId}
            listId={listId}
            itemId={listItem.id}
            itemTitle={listItem.name}
            status={listItem.isActive}
          />
        );
      });
      setTaskList(listItems);
    };
    getTasks();
  }, []);

  return (
    <section className={styles.container}>
      <h3>{title}</h3>
      <hr className={styles.separator} />
      <form onSubmit={event => event.preventDefault()}>
        <input
          type='text'
          required
          placeholder='Enter чтобы сохранить'
          value={formValue}
          onChange={event => setFormValue(event.target.value)}
        />
        <button className={styles.form__button} onClick={addListItem}>
          Save
        </button>
      </form>
      <div className={styles.itemsList}>{taskList}</div>
    </section>
  );
}
