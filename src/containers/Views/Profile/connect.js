import useMe from '../../../data/hooks/useMe';

const useConnect = () => {
    const { me, isLoading } = useMe();

    const isAuth = !!me;

    return {
        isAuth,
        isLoading
    }
}

export default useConnect;