import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import InfoProvider from './utils/context';

function App() {
  return (
    <BrowserRouter>
      <InfoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </InfoProvider>
    </BrowserRouter>
  );
}

export default App;
