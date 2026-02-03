import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  // Responsive: track window width
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const isMobile = windowWidth < 700;

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: '50%',
    width: isMobile ? '98vw' : '100%',
    background: '#000',
    padding: isMobile ? '0.5rem' : '1rem',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: isMobile ? '0 0 24px 24px' : '0 0 50px 50px',
    margin: '0 auto',
    maxWidth: isMobile ? '100vw' : '800px',
    transform: 'translateX(-50%)',
    transition: 'box-shadow 0.4s, background 0.4s',
    boxShadow: '0 4px 24px rgba(65,105,225,0.15)'
  };

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    //{ to: '/blog', label: 'Blog' },
    { to: '/projects', label: 'Works' },
    { to: '/contact', label: 'Contacts' }
  ];

  return (
    <nav style={navStyle}>
      {isMobile && (
        <button
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            marginRight: '8px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '40px',
            width: '40px',
          }}
        >
          <span style={{
            display: 'block',
            width: '24px',
            height: '3px',
            background: '#fff',
            borderRadius: '2px',
            margin: '3px 0',
            transition: '0.3s'
          }} />
          <span style={{
            display: 'block',
            width: '24px',
            height: '3px',
            background: '#fff',
            borderRadius: '2px',
            margin: '3px 0',
            transition: '0.3s'
          }} />
          <span style={{
            display: 'block',
            width: '24px',
            height: '3px',
            background: '#fff',
            borderRadius: '2px',
            margin: '3px 0',
            transition: '0.3s'
          }} />
        </button>
      )}
      <div
        style={{
          display: isMobile ? (menuOpen ? 'flex' : 'none') : 'flex',
          gap: isMobile ? '0.5rem' : '1rem',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          background: isMobile ? '#000' : 'transparent',
          position: isMobile ? 'absolute' : 'static',
          top: isMobile ? '56px' : undefined,
          left: 0,
          right: 0,
          width: isMobile ? '100%' : undefined,
          padding: isMobile ? '1rem 0' : undefined,
          borderRadius: isMobile ? '0 0 24px 24px' : undefined,
          boxShadow: isMobile && menuOpen ? '0 8px 32px rgba(39,64,139,0.18)' : undefined,
        }}
      >
        {links.map(link => {
          const isActive = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => isMobile && setMenuOpen(false)}
              style={{
                background: isActive ? '#27408B' : '#4169E1',
                color: 'white',
                padding: isMobile ? (isActive ? '10px 18px' : '8px 14px') : (isActive ? '14px 32px' : '10px 25px'),
                borderRadius: '25px',
                textDecoration: 'none',
                fontSize: isMobile ? (isActive ? '16px' : '15px') : (isActive ? '18px' : '16px'),
                fontWeight: 'bold',
                boxShadow: isActive ? '0 6px 24px rgba(65,105,225,0.25)' : 'none',
                transform: isActive ? (isMobile ? 'none' : 'translateY(-6px)') : 'none',
                transition: 'all 0.3s',
                textAlign: 'center',
                minWidth: isMobile ? '90px' : undefined
              }}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
