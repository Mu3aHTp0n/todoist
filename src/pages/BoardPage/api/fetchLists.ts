import { $api } from '@app/api';
import { AxiosResponse } from 'axios';

import { IListResponse } from '../model/fetchListsResponse';

export const fetchList = async (
  boardId: string,
): Promise<AxiosResponse<IListResponse>> => {
  try {
    const response = await $api.get(`/list/list?boardId=${boardId}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      const { status } = error.response;
      return status;
    } else if (error.request) {
      return Promise.reject('Запрос был отправлен, но ответ не получен.');
    }
    return Promise.reject(new Error('Упс... Неизвестная ошибка'));
  }
};
