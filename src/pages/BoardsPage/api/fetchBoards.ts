import axios, { AxiosResponse } from 'axios';

import { IBoardResponse } from '../model/fetchBoardResponse';

const BACKEND_API = import.meta.env.VITE_BACKEND_HOST;

export const fetchBoards = async (): Promise<AxiosResponse<IBoardResponse>> => {
  try {
    const response = await axios.get(`${BACKEND_API}/board/boards`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
    });
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
