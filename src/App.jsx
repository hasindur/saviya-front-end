import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import About from './pages/About';
import Navbar from './components/Navbar';
import Organization from './pages/Organization';
import CareHomeDetail from './pages/CareHomeDetail';
import PaymentPage from './pages/Payment'; // <-- import new page

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-screen pt-24">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/carehome/:id" element={<CareHomeDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
