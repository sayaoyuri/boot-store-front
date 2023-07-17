import { createContext, useState } from 'react';
import AuthVerification from '../components/auth/AuthVerification';

export const Infos = createContext({});

export default function InfoProvider({ children }) {
  const user = JSON.parse(localStorage.getItem('user'));
  const [info, setInfo] = useState(user ? { user } : {});
  const [count, setCount] = useState(0);
  const [updating, setUpdating] = useState(false);

  return (
    <Infos.Provider value={{ ...info, updating, count, setCount, setInfo, setUpdating }}>
      <AuthVerification isAuthenticated={user}>{children}</AuthVerification>
    </Infos.Provider>
  );
}
