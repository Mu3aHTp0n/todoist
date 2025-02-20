import axios, { AxiosResponse } from 'axios';

interface IResponse {
  message: string;
}

const BACKEND_API = import.meta.env.VITE_BACKEND_HOST;

export const addList = async (
  name: string,
  boardId: string,
): Promise<AxiosResponse<IResponse>> => {
  try {
    const response = await axios.post(
      `${BACKEND_API}/list/createList`,
      {
        name: name,
        boardId: boardId,
      },
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
      },
    );
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
