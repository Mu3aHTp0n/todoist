import { $api } from '@app/api';
import { AxiosResponse } from 'axios';

import { ITaskResponse } from '../model/fetchTasksResponse';

export const fetchTasks = async (
  boardId: string,
  listId: string,
): Promise<AxiosResponse<ITaskResponse>> => {
  try {
    const response = await $api.get(
      `/task/task?boardId=${boardId}&listId=${listId}`,
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      const { data } = error.response;
      return data.message;
    } else if (error.request) {
      return Promise.reject('Запрос был отправлен, но ответ не получен.');
    }
    return Promise.reject('Упс... Неизвестная ошибка');
  }
};
