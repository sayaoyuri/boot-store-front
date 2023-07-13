import { createContext, useEffect, useState } from 'react';

export const Infos = createContext({});

export default function InfoProvider({ children }) {
  const [info, setInfo] = useState({});

  useEffect(() => {
    setInfo({ ...info, test: 'Hello, World!' });
  }, []);

  return <Infos.Provider value={{ ...info, setInfo }}>{children}</Infos.Provider>;
}
