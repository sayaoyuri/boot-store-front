import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import InfoProvider from './utils/context';
import SignInPage from './pages/auth/SignInPage';

function App() {
  return (
    <BrowserRouter>
      <InfoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/sign-in" element={<SignInPage />} />
        </Routes>
      </InfoProvider>
    </BrowserRouter>
  );
}

export default App;
