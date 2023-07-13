import { useContext } from 'react';
import { Infos } from '../utils/context.jsx';

export default function Home() {
  const { test } = useContext(Infos);
  return <div>HomePage - {test}</div>;
}
