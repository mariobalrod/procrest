import { useQuery } from 'react-query';
import client from '../axiosClient';

const apartmentsReq = async () => {
  try {
    const { data } = await client.get(`/apartments`);

    return data;
  } catch (error) {
    throw error;
  }
};

const useApartments = () => {  
  const { data: apartments, isLoading } = useQuery('apartments', apartmentsReq);

  return {
    apartments,
    isLoading,
  };
};

export default useApartments;