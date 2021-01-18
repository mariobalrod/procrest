import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { setToken, setMe, removeMe, removeToken } from '../services';
import client from '../axiosClient';

const loginReq = async (credenciales) => {
  try {
    const { data } = await client.post(`/auth/local`, credenciales);

    return data;
  } catch (error) {
    throw error;
  }
};

const registerReq = async (credenciales) => {
  try {
    const { data } = await client.post(`/auth/local/register`, credenciales);

    return data;
  } catch (error) {
    throw error;
  }
};

const useAuth = () => {
  const {
    mutateAsync: loginMutation,
    isLoading: isLoginLoading,
  } = useMutation((credenciales) => loginReq(credenciales));
  const {
    mutateAsync: registerMutation,
    isLoading: isRegisterLoading,
  } = useMutation((credenciales) => registerReq(credenciales));

  const login = useCallback(
    async (credenciales) => {
      const response = await loginMutation(credenciales);

      if (response && response.jwt && response.user) {
        setToken(response.jwt);
        setMe(JSON.stringify(response.user));
      }
      return response;
    },
    [loginMutation]
  );

  const register = useCallback(
    async (credenciales) => {
      const response = await registerMutation(credenciales);

      if (response.data && response.data.jwt && response.data.user) {
        setToken(response.data.jwt);
        setMe(JSON.stringify(response.data.user));
      }
      return response;
    },
    [registerMutation]
  );

  const logout = useCallback(() => {
    try {
      removeToken();
      removeMe();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return {
    login,
    logout,
    register,
    isLoading: isLoginLoading || isRegisterLoading,
  };
};

export default useAuth;