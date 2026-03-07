import { useState } from 'react'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import HomePage from './HomePage';
import ProjectsPage from './ProjectsPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import BlogPage from './BlogPage';
import SabrinaCutuBabu from './SabrinaCutuBabu';

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();
  const hideNavbar = location.pathname === '/sabrinacutubabu';

  return (
    <div className="flex flex-col min-h-screen">
      {!hideNavbar && <Navbar />}
      <main className="flex-1 w-full mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Surprise page route (not in navbar) */}
          <Route path="/sabrinacutubabu" element={<SabrinaCutuBabu />} />
        </Routes>
      </main>
      {!hideNavbar && <Footer />}
    </div>
  )
}

export default App
