import { useCallback } from 'react';
import { useHistory } from 'react-router-dom'

const useConnect = () => {
  const { push } = useHistory();

  const goHome = useCallback(() => {
    push('/')
  }, [push]);

  return {
    goHome,
  };
}

export default useConnect;