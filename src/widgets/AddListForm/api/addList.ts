import { $api } from '@app/api';
import { AxiosResponse } from 'axios';

interface IResponse {
  message: string;
}

export const addList = async (
  name: string,
  boardId: string,
): Promise<AxiosResponse<IResponse>> => {
  try {
    const response = await $api.post(`/list/createList`, {
      name: name,
      boardId: boardId,
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
