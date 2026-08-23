import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FloatingContact from './components/FloatingContact';

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen relative bg-cf-cream">
      <Navbar />
      <main className="flex-grow">
        <Routes location={location} key={location.pathname}>
          <Route path="/*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;
