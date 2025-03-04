import { $api } from '@app/api';
import { AxiosResponse } from 'axios';

interface IResponse {
  message: string;
}

export const deleteBoard = async (
  id: string,
): Promise<AxiosResponse<IResponse>> => {
  try {
    const response = await $api.delete(`/board/deleteBoard?boardId=${id}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      const { data } = error.response;
      return Promise.reject(new Error(data.message));
    }
    return Promise.reject(new Error(''));
  }
};
