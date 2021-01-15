import { useQuery } from 'react-query';
import { getMe } from '../services';
import client from '../axiosClient';
import normalizeUser from '../../models/User';
import { useMemo } from 'react';

const meReq = async ({ identifier, password }) => {
  try {
    const { data } = await client.post(`users/${getMe()}`, {
      identifier,
      password,
    });

    return data;
  } catch (error) {
    throw error;
  }
};

const useMe = () => {
  const { data, isLoading } = useQuery(meReq);

  const me = useMemo(() => (data ? normalizeUser(data) : undefined), [
    data,
  ]);

  return {
    me,
    isLoading,
  };
};

export default useMe;