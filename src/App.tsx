import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import OwnerProfile from './pages/OwnerProfile';
import Products from './pages/Products';
import Mirrors from './pages/Mirrors';
import Application from './pages/Application';
import ApplicationDetail from './pages/ApplicationDetail';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/owner-profile" element={<OwnerProfile />} />
            <Route path="/products" element={<Products />} />
            <Route path="/mirrors" element={<Mirrors />} />
            <Route path="/application" element={<Application />} />
            <Route path="/application/:category" element={<ApplicationDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
