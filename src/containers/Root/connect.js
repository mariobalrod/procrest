import useMe from '../../data/hooks/useMe';

const useConnect = () => {
  const { me, isLoading } = useMe();
  
  return { me, isLoading}
}

export default useConnect;