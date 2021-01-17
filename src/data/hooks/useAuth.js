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

const useAuth = () => {  
  const { mutateAsync, isLoading } = useMutation(credenciales => loginReq(credenciales));

  const login = useCallback(
    async (credenciales) => {
      const response = await mutateAsync(credenciales);
      
      if (response && response.jwt && response.user) {
        console.log(response.jwt)
        console.log(response.user)
        setToken(response.jwt);
        setMe(response.user);
      }
      return response;
    },
    [mutateAsync],
  );

  const logout = useCallback(() => {
    try {
      removeToken();
      removeMe();
    } catch (error) {
      console.log(error)
    }
  }, []);

  return {
    login,
    logout,
    isLoading,
  };
};

export default useAuth;