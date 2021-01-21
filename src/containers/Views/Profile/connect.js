import useMe from '../../../data/hooks/useMe';
import useAuth from '../../../data/hooks/useAuth';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const useConnect = () => {
    const { push } = useHistory();
    const { me, isLoading } = useMe();
    const { logout } = useAuth();

    const isAuth = !!me;

    const handleLogout = useCallback(() => {
      logout();
      push('/');
      window.location.reload();
    }, [logout, push]);
    
    return {
        isAuth,
        isLoading,
        handleLogout,
        me,
    }
}

export default useConnect;