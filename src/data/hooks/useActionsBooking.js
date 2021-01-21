import { useQuery } from 'react-query';
import client from '../axiosClient';

const postBooking = async (params) => {
  try {
    const booking = params.queryKey[1];
    
    const { data } = await client.post(`/bookings`, JSON.parse(booking));

    return data;
  } catch (error) {
    throw error;
  }
};

const useActionBooking = (booking) => {  
  const { data: response, isLoading } = useQuery(['booking', booking], postBooking);

  return {
    response,
    isLoading,
  };
};

export default useActionBooking;