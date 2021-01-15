const TOKEN_KEY = 'key';
const ME_KEY = 'key';

export const getToken = () => localStorage.getItem(TOKEN_KEY) || '';

export const removeToken = () => localStorage.removeItem(TOKEN_KEY);

export const setToken = (tokens) => localStorage.setItem(TOKEN_KEY, tokens);

export const getMe = () => localStorage.getItem(ME_KEY) || '';

export const removeMe = () => localStorage.removeItem(ME_KEY);

export const setMe = (me) => localStorage.setItem(ME_KEY, me);