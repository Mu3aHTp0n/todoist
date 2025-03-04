import { useState } from 'react';

import { changeTaskStatus } from './api/changeStatus';

import styles from './ListItems.module.css';
import { error } from 'console';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faPenToSquare,
} from '@fortawesome/free-regular-svg-icons';

interface Props {
  itemTitle: string;
  boardId: string;
  listId: string;
  itemId: string;
  status: boolean;
}

export default function ListItem({
  itemTitle,
  boardId,
  listId,
  itemId,
  status,
}: Props) {
  const [taskData, setTaskData] = useState({
    name: itemTitle,
    isActive: !status,
    taskId: itemId,
    listId: listId,
    boardId: boardId,
  });
  const [isActive, setIsActive] = useState(status);
  const [isShow, setIsShow] = useState(false);

  const changeItemStatus = async () => {
    await changeTaskStatus(taskData);
    setIsActive(!isActive);
  };
  const changeTaskName = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await changeTaskStatus(taskData);
      setIsShow(false);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div
      onClick={changeItemStatus}
      className={`${styles.container} ${isActive ? styles.active : styles.disable}`}
    >
      {isShow ? (
        <form onSubmit={changeTaskName}>
          <input
            value={taskData.name}
            required
            onClick={event => event.stopPropagation()}
            onChange={event =>
              setTaskData({ ...taskData, name: event.target.value })
            }
          />
          {/* <button>Save</button> */}
        </form>
      ) : (
        itemTitle
      )}
      <i
        className={styles.icon}
        onClick={event => {
          event.stopPropagation();
          setIsShow(!isShow);
        }}
      >
        {isShow ? (
          <FontAwesomeIcon icon={faCircleXmark} />
        ) : (
          <FontAwesomeIcon icon={faPenToSquare} />
        )}
      </i>
    </div>
  );
}
