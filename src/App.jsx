import { useState } from 'react'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from './components/ui/tubelight-navbar';
import Footer from './Footer';
import HomePage from './HomePage';
import SabrinaCutuBabu from './SabrinaCutuBabu';

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();
  const hideNavbar = location.pathname === '/sabrinacutubabu';

  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Projects', url: '#projects', icon: Briefcase },
    { name: 'Contact', url: '#contact', icon: FileText }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {!hideNavbar && <NavBar items={navItems} />}
      <main className="flex-1 w-full mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Surprise page route (not in navbar) */}
          <Route path="/sabrinacutubabu" element={<SabrinaCutuBabu />} />
        </Routes>
      </main>
      {!hideNavbar && <Footer />}
    </div>
  )
}

export default App
