import { useCallback, useState } from 'react';
import useAuth from '../../../data/hooks/useAuth';
import { useHistory } from 'react-router-dom';

const useConnect = () => {
  const { push } = useHistory();
  const { login, isLoading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback(() => {
    login({
      identifier: email,
      password: password,
    }).then(() => push('/profile'));
    setEmail('');
    setPassword('');
  }, [login, email, password, push]);

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