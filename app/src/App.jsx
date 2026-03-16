import { LinkedInCallback } from 'react-linkedin-login-oauth2';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LinkedInLogin from './pages/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Din vanliga inloggningssida */}
        <Route path="/" element={<LinkedInLogin />} />

        {/* Denna route fångar upp svaret från LinkedIn */}
        <Route path="/login" element={<LinkedInCallback />} />
      </Routes>
    </BrowserRouter>
  );
}