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
  const accessToken = tokens ? JSON.parse(tokens).accessToken : undefined;

  if (accessToken) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${accessToken}`;
  } else {
    // eslint-disable-next-line no-param-reassign
    delete config.headers.Authorization;
  }

  return config;
});

export default client;