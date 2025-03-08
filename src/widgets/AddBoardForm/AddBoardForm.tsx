import { useState } from 'react';
import { useBoardsStore } from '../../store/BoardsStore.ts';

import { addBoard } from './api/AddBoard';

import { fetchBoards } from '../../pages/BoardsPage/api/fetchBoards.ts';
import Button from '@shared/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import styles from './AddBoardForm.module.css';

export default function AddBoardForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [boardName, setBoardName] = useState('');
  const setBoards = useBoardsStore(state => state.setBoards);

  const addNewBoard = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await addBoard(boardName);
      alert(response.message);
      setBoardName('');
      setIsOpen(false);
      const boardsList = await fetchBoards()
      setBoards(boardsList);
    } catch (error) {
      console.log(error);
    } 
  }

  function showForm() {
    setIsOpen(!isOpen);
    setBoardName('');
  }

  return (
    <div className={styles.container}>
      <section>
        <header className={styles.header} onClick={showForm}>
          <i className={styles.icon}>
            <FontAwesomeIcon icon={faSquarePlus} />
          </i>
          <h2 className={styles.header__title}>Новая доска</h2>
        </header>
        {isOpen && (
          <main className={`${styles.formContainer}`}>
            <h3 className={styles.form__title}>Название доски</h3>
            <form onSubmit={event => addNewBoard(event)}>
              <label className={styles.form__label}>Введите название</label>
              <input
                className={styles.form__input}
                type='text'
                value={boardName}
                maxLength={30}
                required
                onChange={event => setBoardName(event.target.value)}
              />
              <section className='form__action'>
                <Button type='reset' handleClick={showForm}>Отмена</Button>
                <Button type='submit' color='primary'>
                  Сохранить
                </Button>
              </section>
            </form>
          </main>
        )}
      </section>
    </div>
  );
}
