import { $api } from '@app/api';
import { AxiosResponse } from 'axios';

interface IResponse {
  message: string;
}

export const addBoard = async (
  name: string,
): Promise<AxiosResponse<IResponse>> => {
  try {
    const response = await $api.post(`/board/createBoard`, {
      name: name,
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
