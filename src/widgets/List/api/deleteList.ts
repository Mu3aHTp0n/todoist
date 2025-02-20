import axios, { AxiosResponse } from 'axios';

const BACKEND_API = import.meta.env.VITE_BACKEND_HOST;

interface IResponse {
  message: string;
}

export const deleteList = async (
  listId: string,
  boardId: string,
): Promise<AxiosResponse<IResponse>> => {
  try {
    const response = await axios.delete(
      `${BACKEND_API}/list/deleteList?listId=${listId}&boardId=${boardId}`,
    );
    return response.data.message;
  } catch (error) {
    return Promise.reject('');
  }
};
