import { useCallback, useState } from 'react';
import useAuth from '../../../data/hooks/useAuth';

const useConnect = () => {
  const { login, isLoading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback(() => {
    login({
      identifier: email,
      password: password,
    });
    setEmail('');
    setPassword('');
  }, [login, email, password]);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return {
    isLoading,
    email,
    password,
    handleSubmit,
    handleChangeEmail,
    handleChangePassword,
  };
}

export default useConnect;