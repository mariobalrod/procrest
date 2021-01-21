import { useQuery } from 'react-query';
import client from '../axiosClient';

const apartmentsReq = async (params) => {
  try {
    const param = params.queryKey[1];
    
    const { data } = await client.get(`/apartments${param}`);

    return data;
  } catch (error) {
    throw error;
  }
};

const useApartments = (filter) => {  
  const { data: apartments, isLoading } = useQuery(['apartments', filter], apartmentsReq);

  return {
    apartments,
    isLoading,
  };
};

export default useApartments;