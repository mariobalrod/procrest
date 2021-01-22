import useApartments from '../../../data/hooks/useApartments';
import useMe from '../../../data/hooks/useMe';
import useQuery from '../../../utils/useQuery';

const useConnect = () => {
  const { queryParams } = useQuery();
  const city = queryParams.get("city");
  const category = queryParams.get("category");
  const { me, isLoading: meLoading } = useMe();

  const where = () => {
    if (city) return `?_where[city]=${city}`;
    if (category) return `?_where[categories]=${category}`;
    return '';
  };

  const { apartments, isLoading: apartmentLoading } = useApartments(where());

  return {
    apartments,
    me,
    isLoading: meLoading || apartmentLoading,
  };
}

export default useConnect;