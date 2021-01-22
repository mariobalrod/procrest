import { useQuery } from 'react-query';
import client from '../axiosClient';

const bookingsReq = async (params) => {
  try {
    const param = params.queryKey[1];
    
    const { data } = await client.get(`/bookings?_where[user]=${param}`);

    return data;
  } catch (error) {
    throw error;
  }
};

const useBookings = (filter) => {  
  const { data: bookings, isLoading } = useQuery(['bookings', filter], bookingsReq);

  return {
    bookings,
    isLoading,
  };
};

export default useBookings;