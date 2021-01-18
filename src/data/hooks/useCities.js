import { useQuery } from 'react-query';
import client from '../axiosClient';

const citiesReq = async () => {
  try {
    const { data } = await client.get(`/cities`);

    return data;
  } catch (error) {
    throw error;
  }
};

const useAuth = () => {  
  const { data: cities, isLoading } = useQuery('cities', citiesReq);

  return {
    cities,
    isLoading,
  };
};

export default useAuth;