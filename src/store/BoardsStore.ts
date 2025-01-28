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
					boards: state.boards.filter(board => board.id !== id)
				})),
			addList(boardId, listName) {
				
			},
			// addList(boardId, listName) {
			// 	set(state => ({
			// 		boards: state.boards.map(board =>
			// 			board.id === boardId
			// 				? {
			// 					id: 
			// 				}
			// 		)
			// 	}))
			// },
		}),
		{
			name: 'boards-storage',
		}
	)
)