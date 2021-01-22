import useMe from '../../../data/hooks/useMe';
import useAuth from '../../../data/hooks/useAuth';
import useBookings from '../../../data/hooks/useBookings';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const useConnect = () => {
    const { push } = useHistory();
    const { me, isLoading: meLoading } = useMe();
    const { bookings, isLoading: bookingsLoading } = useBookings(me?.id);
    const { logout } = useAuth();

    const isAuth = !!me;

    const handleLogout = useCallback(() => {
      logout();
      push('/');
      window.location.reload();
    }, [logout, push]);
    
    return {
        isAuth,
        isLoading: meLoading || bookingsLoading,
        handleLogout,
        me,
        bookings,
    }
}

export default useConnect;