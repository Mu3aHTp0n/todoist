import { $api } from '@app/api';
import { AxiosResponse } from 'axios';

export const createTask = async (
  name: string,
  listId: string,
): Promise<AxiosResponse<string>> => {
  try {
    const response = await $api.post(`/task/createTask`, {
      name: name,
      listId: listId,
    });
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
