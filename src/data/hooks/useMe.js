import { useQuery } from 'react-query';
import getMe from '../requests/getMe';

const useMe = () => {
  const { me, isLoading } = useQuery('me', getMe);

  return {
    me,
    isLoading,
  };
};

export default useMe;