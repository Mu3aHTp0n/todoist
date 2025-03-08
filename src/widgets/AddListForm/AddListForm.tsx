import { useState } from 'react';

import { addList } from './api/addList';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import Button from '@shared/Button/Button';

import styles from './AddListForm.module.css';

interface Props {
  boardId: string;
}

export default function AddListForm({ boardId }: Props) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [listName, setListName] = useState('');

  async function addNewList(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const response = await addList(listName, boardId);
      alert(response.message);
      setIsFormOpen(false);
      setListName('');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className={styles.form__container}>
      {!isFormOpen && (
        <>
          <FontAwesomeIcon
            style={{
              marginInline: 'auto',
              fontSize: '6rem',
              cursor: 'pointer',
            }}
            onClick={() => setIsFormOpen(true)}
            icon={faSquarePlus}
          />
          <h3 style={{ textAlign: 'center', marginTop: '.5rem' }}>
            Добавить список
          </h3>
        </>
      )}
      {isFormOpen && (
        <form className={styles.container} onSubmit={addNewList}>
          <i onClick={() => setIsFormOpen(false)}>
            <FontAwesomeIcon icon={faXmark} />
          </i>
          <input
            className={styles.form__input}
            type='text'
            placeholder='Новый список'
            value={listName}
            onChange={event => setListName(event.target.value)}
          />
          <Button size='100%'>Отправить форму</Button>
        </form>
      )}
    </section>
  );
}
