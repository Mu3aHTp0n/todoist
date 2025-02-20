import axios, { AxiosResponse } from 'axios';

interface IResponse {
  message: string;
}

const BACKEND_API = import.meta.env.VITE_BACKEND_HOST;

export const deleteBoard = async (
  id: string,
): Promise<AxiosResponse<IResponse>> => {
  try {
    const response = await axios.delete(
      `${BACKEND_API}/board/deleteBoard?boardId=${id}`,
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
      },
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      const { data } = error.response;
      return Promise.reject(new Error(data.message));
    }
    return Promise.reject(new Error(''));
  }
};
