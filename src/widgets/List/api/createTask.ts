import axios, { AxiosResponse } from 'axios';

const BACKEND_API = import.meta.env.VITE_BACKEND_HOST;

export const createTask = async (
  name: string,
  listId: string,
): Promise<AxiosResponse<string>> => {
  try {
    const response = await axios.post(
      `${BACKEND_API}/task/createTask`,
      {
        name: name,
        listId: listId,
      },
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
      return data.message;
    } else if (error.request) {
      return Promise.reject('Запрос был отправлен, но ответ не получен.');
    }
    return Promise.reject('Упс... Неизвестная ошибка');
  }
};
