import useAuth from "../../../data/hooks/useAuth";

const useConnect = () => {
  const { login, logout, isLoading } = useAuth();

  return {
    login,
    logout,
    isLoading,
  };
};

export default useConnect;
