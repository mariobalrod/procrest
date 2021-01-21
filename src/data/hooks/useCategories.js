import { useQuery } from 'react-query';
import client from '../axiosClient';

const categoriesReq = async () => {
  try {
    const { data } = await client.get(`/categories`);

    return data;
  } catch (error) {
    throw error;
  }
};

const useCategories = () => {  
  const { data: categories, isLoading } = useQuery('categories', categoriesReq);

  return {
    categories,
    isLoading,
  };
};

export default useCategories;