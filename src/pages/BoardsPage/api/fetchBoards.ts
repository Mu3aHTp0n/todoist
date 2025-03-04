import { $api } from '@app/api';
import { AxiosResponse } from 'axios';

import { IBoardResponse } from '../model/fetchBoardResponse';

export const fetchBoards = async (): Promise<AxiosResponse<IBoardResponse>> => {
  try {
    const response = await $api.get(`/board/boards`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      const { status } = error.response;
      return status;
    }
    return Promise.reject(new Error(''));
  }
};
