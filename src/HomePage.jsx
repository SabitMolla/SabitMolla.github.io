import React, { useState, useEffect } from 'react';

function HomePage() {
  // Responsive: track window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const isMobile = windowWidth < 700;

  return (
    <>
      <section style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '1.5rem' : '3rem',
        alignItems: 'center',
        maxWidth: '1050px',
        margin: isMobile ? '80px auto 0 auto' : '120px auto 0 auto',
        padding: isMobile ? '0 1rem' : undefined,
      }}>
        <img src="/Portfolio/Profile.jpg" alt="My image" style={{
          width: isMobile ? '180px' : '300px',
          height: isMobile ? '180px' : '300px',
          borderRadius: '50%',
          backgroundColor: '#C0C0C0',
          objectFit: 'cover',
          flexShrink: 0,
          marginBottom: isMobile ? '1rem' : 0
        }} />
        <div style={{ flex: 1 }}>
          <h1 style={{
            fontSize: isMobile ? '1.5rem' : '2.5rem',
            margin: 0,
            color: '#fff',
            lineHeight: '1.2',
            textAlign: isMobile ? 'center' : 'left'
          }}>
            Hi I am Molla Md Sabit. A Software Engineer and Researcher
          </h1>
        </div>
      </section>
      <section style={{ maxWidth: '1050px', margin: '2rem auto 0 auto', padding: isMobile ? '0 1rem' : undefined }}>
        <h2 style={{ color: '#fff', fontWeight: 'bold', marginBottom: '0.5rem', textAlign: isMobile ? 'center' : 'left' }}>Languages</h2>
        <div style={{backgroundColor: "white", padding: '1rem' , borderRadius: '40px' , display: 'flex', flexWrap: 'wrap', gap: isMobile ? '1.2rem' : '2.5rem', alignItems: 'center',justifyContent: 'center', marginBottom: '1.5rem' }}>
          <img src="/Portfolio/python.png" alt="Python" style={{ width: 48, height: 48 }} />
          <img src="/Portfolio/C++.png" alt="C++" style={{ width: 48, height: 48 }} />
          <img src="/Portfolio/java.png" alt="Java" style={{ width: 48, height: 48 }} />
          <img src="/Portfolio/react.png" alt="React" style={{ width: 48, height: 48 }} />
          <img src="/Portfolio/js.png" alt="JavaScript" style={{ width: 48, height: 48 }} />
          <img src="/Portfolio/sql.png" alt="SQL" style={{ width: 48, height: 48 }} />
        </div>
      </section>
      <section style={{ maxWidth: '1050px', margin: '2rem auto 0 auto', padding: isMobile ? '0 1rem' : undefined }}>
        <h2 style={{ color: '#fff', fontWeight: 'bold', marginBottom: '0.5rem', textAlign: isMobile ? 'center' : 'left' }}>Skills</h2>
        <div style={{ backgroundColor: "white", padding: '1rem' , borderRadius: '40px' , display: 'flex', flexWrap: 'wrap', gap: isMobile ? '1.2rem' : '2.5rem', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/Portfolio/Kaggle.png" alt="Kaggle" style={{ width: 60, height: 30 }} />
          <img src="/Portfolio/docker.png" alt="Docker" style={{ width: 48, height: 48 }} />
          <img src="/Portfolio/n8n.png" alt="N8N" style={{ width: 80, height: 60 }} />
          <img src="/Portfolio/github.png" alt="GitHub" style={{ width: 48, height: 48 }} />
        </div>
      </section>
    </>
  );
}

export default HomePage;
