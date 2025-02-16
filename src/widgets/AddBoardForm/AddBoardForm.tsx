import { useState } from 'react';
import { useBoardsStore } from '@store/BoardsStore';

import styles from './AddBoardForm.module.css';

import Button from '@shared/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';

export default function AddBoardForm() {
  const addNewBoard = useBoardsStore(state => state.addBoard);

  const [isOpen, setIsOpen] = useState(false);
  const [boardName, setBoardName] = useState('');

  function addBoard(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addNewBoard(boardName);
    setBoardName('');
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
            <form onSubmit={event => addBoard(event)}>
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
                <Button handleClick={showForm}>Отмена</Button>
                <Button text='' color='primary'>
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
