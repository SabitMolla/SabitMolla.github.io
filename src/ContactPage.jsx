import React from 'react';

function ContactPage() {
  // Responsive: track window width
  const [windowWidth, setWindowWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const isMobile = windowWidth < 700;

  return (
    <div style={{
      marginTop: isMobile ? '60px' : '120px',
      padding: isMobile ? '1.2rem' : '2.5rem',
      background: 'linear-gradient(135deg, #2d2d2d 80%, #27408B 100%)',
      borderRadius: isMobile ? '18px' : '32px',
      boxShadow: '0 8px 32px rgba(39,64,139,0.18)',
      transform: isMobile ? 'scale(1.01) translateY(-4px)' : 'scale(1.04) translateY(-8px)',
      transition: 'all 0.4s',
      maxWidth: isMobile ? '98vw' : '900px',
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: isMobile ? 'center' : 'left',
    }}>
      <h2>Contact</h2>
      <p>Simple forms and links (Email, LinkedIn, GitHub) for recruiters and collaborators to reach you easily.</p>
    </div>
  );
}

export default ContactPage;
