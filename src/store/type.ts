export interface IBoardStore {
    boards: IBoard[];
    addBoard: (boardName: string) => void;
    removeBoard: (boardId: number) => void;
    addList: (boardId: number, listName: string) => void;
}

export interface IBoard {
    id: number,
    title: string,
    list: IList[]
}

export interface IList {
    id: number,
    title: string,
    listItem: IListItem[];
}

export interface IListItem {
    id: number,
    description: string,
    status: boolean,
}