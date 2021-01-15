import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { setToken, setMe } from '../services';
import client from '../axiosClient';

const loginReq = async ({ identifier, password }) => {
  try {
    const { data } = await client.post(`auth/local`, {
      identifier,
      password,
    });

    return data;
  } catch (error) {
    throw error;
  }
};

const useAuth = () => {
  const { mutateAsync, isLoading } = useMutation(loginReq);

  const login = useCallback(
    async ({ identifier, password }) => {
      const response = await mutateAsync({
        identifier,
        password,
      });
      
      if (response && response.jwt) {
        setToken(response.jwt);
        setMe(response.user);
      }
      return response;
    },
    [mutateAsync],
  );

  return {
    login,
    isLoading,
  };
};

export default useAuth;