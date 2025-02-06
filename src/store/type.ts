export interface IBoardStore {
  boards: IBoard[];
  addBoard: (boardName: string) => void;
  removeBoard: (boardId: string) => void;
  addList: (boardId: string, listName: string) => void;
  addListItem: (boardId: string, listId: string, itemTitle: string) => void;
  changeStatus: (
    boardId: string,
    listId: string,
    itemId: string,
    currentStatus: boolean,
  ) => void;
}

export interface IBoard {
  id: string;
  title: string;
  list: IList[];
}

export interface IList {
  id: string;
  title: string;
  listItem: IListItem[];
}

export interface IListItem {
  id: string;
  description: string;
  status: boolean;
}
