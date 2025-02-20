export interface ITask {
  id: string;
  name: string;
  isActive: boolean;
}

export type ITaskResponse = ITask[];
