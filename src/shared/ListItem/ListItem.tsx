import { useBoardsStore } from '../../store/BoardsStore';

import styles from './ListItems.module.css';

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
  const changeStatus = useBoardsStore(state => state.changeStatus);

  const changeItemStatus = () => {
    changeStatus(boardId, listId, itemId, status);
  };

  return (
    <div
      onClick={changeItemStatus}
      className={`${styles.container} ${status ? styles.active : styles.disable}`}
    >
      {itemTitle}
    </div>
  );
}
