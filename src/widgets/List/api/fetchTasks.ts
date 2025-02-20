import axios, { AxiosResponse } from 'axios';

const BACKEND_API = import.meta.env.VITE_BACKEND_HOST;

import { ITaskResponse } from '../model/fetchTasksResponse';

export const fetchTasks = async (
  boardId: string,
  listId: string,
): Promise<AxiosResponse<ITaskResponse>> => {
  try {
    const response = await axios.get(
      `${BACKEND_API}/task/task?boardId=${boardId}&listId=${listId}`,
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
      },
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
