import { v4 as uuidv4 } from 'uuid';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { IBoardStore } from './type';

export const useBoardsStore = create<IBoardStore>()(
  persist(
    set => ({
      boards: [],
      addBoard: name => {
        set(state => {
          return {
            boards: [
              ...state.boards,
              {
                id: uuidv4(),
                title: name,
                list: [],
              },
            ],
          };
        });
      },
      removeBoard: id =>
        set(state => ({
          boards: state.boards.filter(board => board.id !== id),
        })),
      addList: (boardId, listName) => {
        set(state => {
          const boardIndex = state.boards.findIndex(
            board => board.id === boardId,
          );

          const newList = {
            id: uuidv4(),
            title: listName,
            listItem: [],
          };

          const updatedBoards = [...state.boards];
          updatedBoards[boardIndex].list.push(newList);

          return { boards: updatedBoards };
        });
      },
      addListItem: (boardId, listId, itemName) => {
        set(state => {
          const boardIndex = state.boards.findIndex(
            board => board.id === boardId,
          );
          const listIndex = state.boards[boardIndex].list.findIndex(
            list => list.id === listId,
          );

          const newListItem = {
            id: uuidv4(),
            description: itemName,
            status: false,
          };

          const updatedBoards = [...state.boards];
          updatedBoards[boardIndex].list[listIndex].listItem.push(newListItem);
          return { boards: updatedBoards };
        });
      },
      changeStatus: (boardId, listId, itemId, currentStatus) => {
        set(state => {
          const boardIndex = state.boards.findIndex(
            board => board.id === boardId,
          );
          const listIndex = state.boards[boardIndex].list.findIndex(
            list => list.id === listId,
          );
          const itemIndex = state.boards[boardIndex].list[
            listIndex
          ].listItem.findIndex(item => item.id === itemId);

          const updatedBoards = [...state.boards];
          updatedBoards[boardIndex].list[listIndex].listItem[itemIndex].status =
            !currentStatus;
          return { boards: updatedBoards };
        });
      },
    }),
    {
      name: 'boards-storage',
    },
  ),
);
