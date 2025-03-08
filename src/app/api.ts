import axios from 'axios';

export const $api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_HOST,
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
  },
});
