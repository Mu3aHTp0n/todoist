import { deleteBoard } from './api/deleteBoard';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons/faTrashCan';

import Button from '../Button/Button';

import styles from './BoardsItem.module.css';

interface Props {
  id: string;
  title: string;
}

export default function BoardItem({ id, title }: Props) {
  function removeCurrentBoard() {
    deleteBoard(id);
  }

  return (
    <div className={styles.container}>
      <Link to={`/boards/${id}`}>
        <Button>{title}</Button>
      </Link>
      <i className={styles.trashIcon} onClick={removeCurrentBoard}>
        <FontAwesomeIcon icon={faTrashCan} />
      </i>
    </div>
  );
}
