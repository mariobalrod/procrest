import useCities from '../../../data/hooks/useCities';

const useConnect = () => {
    const { cities, isLoading } = useCities();

    return {
        cities,
        isLoading
    }
}

export default useConnect;