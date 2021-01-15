import useAuth from '../../data/hooks/useAuth';
import useMe from '../../data/hooks/useMe';

const useConnect = () => {
    const { login, isLoading: loadingLogin } = useAuth();
    const { me, isLoading: loadingMe } = useMe();

    return {
        me,
        login,
        isLoading: loadingLogin || loadingMe,
    }
}

export default useConnect;