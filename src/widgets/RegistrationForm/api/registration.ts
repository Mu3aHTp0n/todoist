import axios from 'axios';

const BACKEND_API = import.meta.env.VITE_BACKEND_HOST;

interface IRegData {
  email: string;
  password: string;
  name: string;
}

export const registration = async (regData: IRegData) => {
  try {
    const response = await axios.post(
      `${BACKEND_API}/auth/registration`,
      regData,
    );
    localStorage.setItem('accessToken', response.data.token);
    return response.data.token;
  } catch (error) {
    if (error.response) {
      const { data } = error.response;
      return Promise.reject(data.message);
    } else if (error.request) {
      return Promise.reject('Запрос был отправлен, но ответ не получен.');
    }
    return Promise.reject('Упс... Неизвестная ошибка.');
  }
};
