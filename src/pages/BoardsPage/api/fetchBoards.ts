import { $api } from '@app/api';
import { AxiosError, AxiosResponse } from 'axios';

import { IBoardResponse } from '../model/fetchBoardResponse';

export const fetchBoards = async (): Promise<AxiosResponse<IBoardResponse>> => {
  try {
    const response = await $api.get(`/board/boards`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response) {
        const { data } = error.response;
        return data;
      }
    }
    return Promise.reject(new Error(''));
  }
};
