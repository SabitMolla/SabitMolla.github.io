import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    background: '#000',
    padding: '1rem',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '0 0 50px 50px',
    margin: '0 auto',
    maxWidth: '800px',
    left: '50%',
    transform: 'translateX(-50%)',
    transition: 'box-shadow 0.4s, background 0.4s',
    boxShadow: '0 4px 24px rgba(65,105,225,0.15)'
  };

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Works' },
    { to: '/contact', label: 'Contacts' }
  ];

  return (
    <nav style={navStyle}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {links.map(link => {
          const isActive = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              style={{
                background: isActive ? '#27408B' : '#4169E1',
                color: 'white',
                padding: isActive ? '14px 32px' : '10px 25px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontSize: isActive ? '18px' : '16px',
                fontWeight: 'bold',
                boxShadow: isActive ? '0 6px 24px rgba(65,105,225,0.25)' : 'none',
                transform: isActive ? 'translateY(-6px)' : 'none',
                transition: 'all 0.3s'
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
