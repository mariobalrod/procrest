import useMe from '../../../data/hooks/useMe';
import { useMemo } from 'react';

const useConnect = () => {
    const { me, isLoading } = useMe();

    const isAuth = !!me;

    useMemo(() => {
        window.location.reload();
    }, [])

    return {
        isAuth,
        isLoading
    }
}

export default useConnect;