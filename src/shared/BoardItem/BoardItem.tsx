import { useBoardsStore } from '@store/BoardsStore';

import styles from './BoardsItem.module.css'

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons/faTrashCan";
import Button from "../Button/Button";

interface Props {
  id: number,
  title: string,
}

export default function BoardItem({id, title}: Props) {
  const removeBoard = useBoardsStore(state => state.removeBoard)

  function removeCurrentBoard() {
    removeBoard(id);
  }

  return (
    <div className={styles.container}>
      <Link to={`/boards/${id}`}>
          <Button handleClick={() => null}>{title}</Button>
      </Link>        
      <i className={styles.trashIcon} onClick={removeCurrentBoard}>
        <FontAwesomeIcon icon={faTrashCan} />
      </i>
    </div>
  )
}
