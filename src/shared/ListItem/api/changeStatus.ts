import { $api } from '@app/api';
import { AxiosError, AxiosPromise } from 'axios';

interface IParametr {
  name: string;
  isActive: boolean;
  taskId: string;
  listId: string;
  boardId: string;
}

export const changeTaskStatus = async (
  requestBody: IParametr,
): Promise<AxiosPromise<string>> => {
  try {
    const response = await $api.put(`/task/editTask`, requestBody);
    return response.data.message;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response) {
        const { data } = error.response;
        return data.message;
      } else if (error.request) {
        return Promise.reject('Запрос был отправлен, но ответ не получен.');
      }
    }
    return Promise.reject('Упс... БХ украл запрос');
  }
};
