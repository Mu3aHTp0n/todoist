import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IBoardStore {
	boards: IBoard[];
	addBoard: (boardName: string) => void;
	removeBoard: (boardId: number) => void;
	addList: (boardId: number, listName: string) => void;
}

interface IBoard {
	id: number,
	title: string,
	list: IList[]
}

interface IList {
	id: number,
	title: string,
	listItem: IListItem[];
}

interface IListItem {
	id: number,
	description: string,
	status: boolean,
}

export const useBoardsStore = create<IBoardStore>()(
	persist(
		set => ({
			boards: [],
			addBoard: (name) =>
				set(state => ({
					boards: [...state.boards, {
						id: state.boards.length,
						title: name,
						list:[]
					}],
				})),
			removeBoard: (id) =>
				set(state => ({
					boards: state.boards.filter((_, index) => index !== id)
				})),
			addList: (id, title) =>
				set(state => ({
					// const newList = {
					// 	id: state.boards[id].list.length,
					// 	title: title,
					// 	listItems: [],
					// };
					boards: []


					// boards: state.boards[id].list: {
					// 	id: state.boards[id].list.length,
					// 	title: title,
					// 	listItems: [],
					// }
				}))
		}),
		{
			name: 'boards-storage',
		}
	)
)