import { useState } from 'react';

import styles from './AddListForm.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { useBoardsStore } from '@store/BoardsStore';
import Button from '@shared/Button/Button';

export default function AddListForm({ boardId }) {
  const addList = useBoardsStore(state => state.addList);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [listName, setListName] = useState('');

  // function handleKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
  // 	if (event.key === 'Enter') {
  // 	}
  // }

  function addNewList(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addList(+boardId, listName);
    setIsFormOpen(false);
    setListName('');
  }

  return (
    <>
      <Button handleClick={() => setIsFormOpen(true)}>Добавить список</Button>
      {isFormOpen && (
        <form className={styles.container} onSubmit={addNewList}>
          <i onClick={() => setIsFormOpen(false)}>
            <FontAwesomeIcon icon={faXmark} />
          </i>
          <input
            type='text'
            placeholder='Новый список'
            value={listName}
            onChange={event => setListName(event.target.value)}
            // onKeyDown={handleKeyUp}
          />
          <button>Отправить форму</button>
        </form>
      )}
    </>
  );
}
