import { useMutation } from 'react-query';
import client from '../axiosClient';
import { useCallback } from 'react';

const postBooking = async (booking) => {
  try {
    const { data } = await client.post(`/bookings`, booking);

    return data;
  } catch (error) {
    throw error;
  }
};

const useActionBooking = () => {  
  const { mutateAsync, isLoading } = useMutation((booking) => postBooking(booking));

  const createBooking = useCallback(
    async (booking) => {
      const response = await mutateAsync(booking);
      return response;
    },
    [mutateAsync]
  );

  return {
    createBooking,
    isLoading,
  };
};

export default useActionBooking;