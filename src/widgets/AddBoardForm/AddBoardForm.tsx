import { useState } from "react"
import { useBoardsStore } from "@store/BoardsStore"

import styles from "./AddBoardForm.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Button from "@shared/Button/Button"
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons"

export default function AddBoardForm() {
	const boards = useBoardsStore(state => state.boards)
	const addNewBoard = useBoardsStore(state => state.addBoard)

	const [isOpen, setIsOpen] = useState(false)
	const [isError, setIsError] = useState(false)
	const [boardName, setBoardName] = useState('')
	const [error, setError] = useState('')

	function addBoard(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const isDublicateTitle = boards.some(obj => {
			return obj.title === boardName
		})
		setIsError(isDublicateTitle ? true : false)
		setError(isDublicateTitle ? 'Доска с таким названием уже есть' : '')
		if (isDublicateTitle) {
			setBoardName('');
			return
		}
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
				{isOpen &&
					<main className={`${styles.formContainer}`}>
						<h3 className={styles.form__title}>Название доски</h3>
						<form onSubmit={event => addBoard(event)}>
							<label className={styles.form__label}>Введите название</label>
							<input className={styles.form__input}
								   type="text"
								   value={boardName}
								   maxLength={30}
								   required
								   onChange={event => setBoardName(event.target.value)} />
							{ isError && <p className={styles.error}>{error}</p> }
							<section className="form__action">
								<Button text="Отмена" handleClick={showForm} />
								<Button text="Сохранить" color="primary"/>
							</section>
						</form>
					</main> }
			</section>
		</div>
	)
}
