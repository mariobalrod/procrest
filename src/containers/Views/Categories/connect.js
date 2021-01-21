import useCategories from '../../../data/hooks/useCategories';

const useConnect = () => {
    const { categories, isLoading } = useCategories();

    return {
        categories,
        isLoading
    }
}

export default useConnect;