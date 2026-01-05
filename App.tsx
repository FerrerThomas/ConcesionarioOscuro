
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Vehicles from './pages/Vehicles';
import AdminDashboard from './pages/AdminDashboard';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (isAdmin) return null;

  return (
    <div className="sticky top-0 z-50 bg-charcoal-dark border-b border-charcoal-light shadow-xl backdrop-blur-md bg-opacity-90">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="material-symbols-outlined text-primary text-4xl group-hover:rotate-12 transition-transform duration-300">directions_car</span>
            <span className="font-black text-xl tracking-tighter uppercase">Concesionaria</span>
          </Link>
          <nav className="hidden md:flex items-center gap-10">
            {[
              { label: 'Inicio', path: '/' },
              { label: 'Vehículos', path: '/vehiculos' },
              { label: 'Financiación', path: '#' },
              { label: 'Contacto', path: '#' },
              { label: 'Admin', path: '/admin' },
            ].map(link => (
              <Link 
                key={link.label} 
                to={link.path} 
                className={`text-sm font-bold tracking-wider uppercase transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-text-light'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-6">
          <button className="hidden sm:block bg-primary hover:bg-red-700 text-white font-black py-2.5 px-6 rounded-full transition-all text-xs uppercase tracking-widest shadow-lg shadow-primary/20">
            Vender mi auto
          </button>
          
          <button 
            className="md:hidden text-text-light p-2 hover:bg-charcoal-medium rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-charcoal-dark border-b border-charcoal-light shadow-2xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col p-4">
            {[
              { label: 'Inicio', path: '/' },
              { label: 'Vehículos', path: '/vehiculos' },
              { label: 'Financiación', path: '#' },
              { label: 'Contacto', path: '#' },
              { label: 'Admin', path: '/admin' },
            ].map(link => (
              <Link 
                key={link.label} 
                to={link.path} 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-4 px-4 text-sm font-bold tracking-wider uppercase border-b border-charcoal-medium last:border-0 hover:bg-charcoal-medium/50 rounded-lg transition-colors ${location.pathname === link.path ? 'text-primary' : 'text-text-light'}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 mt-2">
              <button className="w-full bg-primary hover:bg-red-700 text-white font-black py-3 px-6 rounded-xl transition-all text-xs uppercase tracking-widest shadow-lg shadow-primary/20">
                Vender mi auto
              </button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

const Footer: React.FC = () => {
  const location = useLocation();
  if (location.pathname.startsWith('/admin')) return null;

  return (
    <footer className="bg-background-dark border-t border-charcoal-light py-12 px-4 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-3xl">directions_car</span>
          <span className="font-black text-lg tracking-tighter uppercase">Concesionaria</span>
        </div>
        <p className="text-text-dark text-sm font-medium">© 2024 Concesionaria Premium. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          {['social_leaderboard', 'photo_camera', 'mail'].map(icon => (
            <button key={icon} className="text-text-dark hover:text-primary transition-colors">
              <span className="material-symbols-outlined">{icon}</span>
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen text-text-light selection:bg-primary selection:text-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vehiculos" element={<Vehicles />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
