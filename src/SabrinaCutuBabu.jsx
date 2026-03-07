import React from 'react';
// Remove direct import of the image to avoid issues with special characters in filename
// import surpriseImg from './assets/Screenshot 2026-02-06 at 12.08.43 AM.png';

function SabrinaCutuBabu() {
  const [noClicks, setNoClicks] = React.useState(0);
  const [noPos] = React.useState({ top: '60%', left: '55%' });
  const [showKisses, setShowKisses] = React.useState(false);
  const [showSurprise, setShowSurprise] = React.useState(false);
  const containerRef = React.useRef(null);

  const surpriseImgHref = React.useMemo(() => {
    try {
      return new URL('./assets/Screenshot 2026-02-06 at 12.08.43 AM.png', import.meta.url).href;
    } catch (e) {
      return null;
    }
  }, []);

  const handleNoClick = () => {
    setNoClicks((c) => {
      const next = c + 1;
      if (next >= 3) {
        setShowSurprise(true);
      }
      return next;
    });
    alert('Answer the right one. Hint: Yes');
  };

  const handleYesClick = () => {
    setShowKisses(true);
  };

  const dismissSurprise = () => setShowSurprise(false);

  const kisses = React.useMemo(() => {
    if (!showKisses) return [];
    const count = 120; // fill screen with many kisses
    const arr = new Array(count).fill(0).map((_, i) => {
      const x = Math.random() * 100; // vw percent
      const y = Math.random() * 100; // vh percent
      const rotate = Math.floor(Math.random() * 360);
      const size = 20 + Math.random() * 34; // px
      const opacity = 0.6 + Math.random() * 0.4;
      return { id: i, x, y, rotate, size, opacity };
    });
    return arr;
  }, [showKisses]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#b00000', // darker red, less bright
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Will you be my Valentine?</h1>

      <div style={{ position: 'relative', width: '100%', maxWidth: 600, height: 180 }}>
        <button
          onClick={handleYesClick}
          style={{
            padding: '12px 18px',
            borderRadius: 10,
            border: 'none',
            background: '#ffffff',
            color: 'red',
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            position: 'absolute',
            left: '25%',
            top: '60%',
            transform: 'translate(-50%, -50%)',
          }}
          aria-label="Yes"
        >
          Yes
        </button>

        <button
          onClick={handleNoClick}
          style={{
            padding: '12px 18px',
            borderRadius: 10,
            border: 'none',
            background: '#ffffff',
            color: 'red',
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            position: 'absolute',
            left: noPos.left,
            top: noPos.top,
            transform: 'translate(-50%, -50%)',
          }}
          aria-label="No"
        >
          No
        </button>
      </div>

      {showKisses && (
        <div aria-hidden="true" style={{ position: 'fixed', inset: 0, pointerEvents: 'none' }}>
          {kisses.map((k) => (
            <span
              key={k.id}
              style={{
                position: 'absolute',
                left: `${k.x}vw`,
                top: `${k.y}vh`,
                transform: `rotate(${k.rotate}deg)`,
                fontSize: `${k.size}px`,
                opacity: k.opacity,
              }}
            >
              😘
            </span>
          ))}
        </div>
      )}

      {showSurprise && (
        <div
          onClick={dismissSurprise}
          role="button"
          aria-label="Close surprise"
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 20, cursor: 'pointer'
          }}
        >
          {surpriseImgHref ? (
            <img
              src={surpriseImgHref}
              alt="Surprise"
              style={{ maxWidth: '90vw', maxHeight: '80vh', borderRadius: 12, boxShadow: '0 8px 24px rgba(0,0,0,0.5)' }}
            />
          ) : (
            <div style={{ color: '#fff', fontSize: 18, padding: 16, textAlign: 'center' }}>
              Image failed to load. Please rename the file to a simpler name (e.g., surprise.png) and place it in public/.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SabrinaCutuBabu;
