import { useCallback, useState } from 'react';
import useAuth from '../../../data/hooks/useAuth';

const useConnect = () => {
  const { register, isLoading } = useAuth();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback(() => {
    register({
      username: username,
      email: email,
      password: password,
    });
    setEmail('');
    setPassword('');
    setUsername('');
  }, [register, username, email, password]);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return {
    isLoading,
    email,
    password,
    username,
    handleSubmit,
    handleChangeEmail,
    handleChangePassword,
    handleChangeUsername,
  };
}

export default useConnect;