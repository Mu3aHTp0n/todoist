import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { IBoardStore } from './type';

export const useBoardsStore = create<IBoardStore>()(
	persist(
		set => ({
			boards: [],
			addBoard: (name) => {
				set(state => {
					const newId = state.boards.length > 0 ? Math.max(...state.boards.map(board => board.id)) + 1 : 0;
					return {
						boards: [...state.boards, {
							id: newId,
							title: name,
							list: []
						}]
					}
				})
			},
			removeBoard: (id) =>
				set(state => ({
					boards: state.boards.filter(board => board.id !== id)
				})),
				addList: (boardId, listName) => {
					set((state) => {
						const boardIndex = state.boards.findIndex(board => board.id === boardId);
			
						const newListId = state.boards[boardIndex].list.length > 0 
							? Math.max(...state.boards[boardIndex].list.map(list => list.id)) + 1 
							: 0;
			
						const newList = {
							id: newListId,
							title: listName,
							listItem: []
						};
			
						const updatedBoards = [...state.boards];
						updatedBoards[boardIndex].list.push(newList);
			
						return { boards: updatedBoards };
					});
				},
		}),
		{
			name: 'boards-storage',
		}
	)
)