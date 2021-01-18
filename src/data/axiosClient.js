import axios from 'axios';
import { getToken } from './services';

const client = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

client.interceptors.request.use((config) => {
  const tokens = getToken();

  if (tokens) {
    config.headers.Authorization = `Bearer ${tokens}`;
  } else {
    delete config.headers.Authorization;
  }

  return config;
});

export default client;