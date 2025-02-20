import axios, { AxiosResponse } from 'axios';

import { IListResponse } from '../model/fetchListsResponse';

const BACKEND_API = import.meta.env.VITE_BACKEND_HOST;

export const fetchList = async (
  boardId: string,
): Promise<AxiosResponse<IListResponse>> => {
  try {
    const response = await axios.get(
      `${BACKEND_API}/list/list?boardId=${boardId}`,
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
      },
    );
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
