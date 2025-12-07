function HomePage() {
  return (
    <>
      <section style={{
        display: 'flex',
        gap: '3rem',
        alignItems: 'center',
        maxWidth: '1050px',
        margin: '120px auto 0 auto',
      }}>
        <img src="/Profile.jpg" alt="My image" style={{
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          backgroundColor: '#C0C0C0',
          objectFit: 'cover',
          flexShrink: 0
        }} />
        <div style={{ flex: 1 }}>
          <h1 style={{
            fontSize: '2.5rem',
            margin: 0,
            color: '#fff',
            lineHeight: '1.2'
          }}>
            Hi I am Molla Md Sabit. An Software Engineer and Researcher
          </h1>
        </div>
      </section>
      <section style={{ maxWidth: '1050px', margin: '2rem auto 0 auto' }}>
        <h2 style={{ color: '#fff', fontWeight: 'bold', marginBottom: '0.5rem' }}>Languages</h2>
        <div style={{backgroundColor: "white", padding: '1rem' , borderRadius: '40px' , display: 'flex', gap: '2.5rem', alignItems: 'center',justifyContent: 'center', marginBottom: '1.5rem' }}>
          <img src="/python.png" alt="Python" style={{ width: 48, height: 48 }} />
          <img src="/C++.png" alt="C++" style={{ width: 48, height: 48 }} />
          <img src="/java.png" alt="Java" style={{ width: 48, height: 48 }} />
          <img src="/react.png" alt="React" style={{ width: 48, height: 48 }} />
          <img src="/js.png" alt="JavaScript" style={{ width: 48, height: 48 }} />
          <img src="/sql.png" alt="SQL" style={{ width: 48, height: 48 }} />
        </div>
      </section>
      <section style={{ maxWidth: '1050px', margin: '2rem auto 0 auto' }}>
        <h2 style={{ color: '#fff', fontWeight: 'bold', marginBottom: '0.5rem' }}>Skills</h2>
        <div style={{ backgroundColor: "white", padding: '1rem' , borderRadius: '40px' , display: 'flex', gap: '2.5rem', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/Kaggle.png" alt="Kaggle" style={{ width: 60, height: 30 }} />
          <img src="/docker.png" alt="Docker" style={{ width: 48, height: 48 }} />
          <img src="/n8n.png" alt="N8N" style={{ width: 80, height: 60 }} />
          <img src="/github.png" alt="GitHub" style={{ width: 48, height: 48 }} />
        </div>
      </section>
    </>
  );
}

export default HomePage;
