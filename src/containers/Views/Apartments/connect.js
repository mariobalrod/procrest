import useApartments from '../../../data/hooks/useApartments';
import useQuery from '../../../utils/useQuery';

const useConnect = () => {
  const { queryParams } = useQuery();
  const city = queryParams.get("city");
  const category = queryParams.get("category");

  const where = () => {
    if (city) return `?_where[city]=${city}`;
    if (category) return `?_where[categories]=${category}`;
    return '';
  };

  const { apartments, isLoading } = useApartments(where());

  return {
    apartments,
    isLoading,
  };
}

export default useConnect;