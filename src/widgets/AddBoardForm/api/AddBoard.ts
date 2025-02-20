import axios, { AxiosResponse } from 'axios';

interface IResponse {
  message: string;
}

const BACKEND_API = import.meta.env.VITE_BACKEND_HOST;

export const addBoard = async (
  name: string,
): Promise<AxiosResponse<IResponse>> => {
  try {
    const response = await axios.post(
      `${BACKEND_API}/board/createBoard`,
      {
        name: name,
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
