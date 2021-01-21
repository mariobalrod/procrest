import useApartments from '../../../data/hooks/useApartments';

const useConnect = () => {
    const { apartments, isLoading } = useApartments();

    return {
        apartments,
        isLoading
    }
}

export default useConnect;