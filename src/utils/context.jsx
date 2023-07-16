import { createContext, useEffect, useState } from 'react';
import AuthVerification from '../components/auth/AuthVerification';

export const Infos = createContext({});

export default function InfoProvider({ children }) {
  const user = JSON.parse(localStorage.getItem('user'));
  const [info, setInfo] = useState(user ? { user } : {});
  useEffect(() => {
    console.log('Mudou!');
  }, []);

  return (
    <Infos.Provider value={{ ...info, setInfo }}>
      <AuthVerification isAuthenticated={user}>{children}</AuthVerification>
    </Infos.Provider>
  );
}
