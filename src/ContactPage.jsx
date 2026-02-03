import React from 'react';
import { jsPDF } from 'jspdf';

function ContactPage() {
  // Responsive: track window width
  const [windowWidth, setWindowWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const isMobile = windowWidth < 700;

  // Generate Resume PDF from site content
  const handleDownloadResume = React.useCallback(() => {
    const doc = new jsPDF({ unit: 'pt', format: 'a4' });
    const marginX = 48;
    let y = 56;

    const lineGap = 16;
    const sectionGap = 18;

    const addHeading = (text) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(16);
      doc.text(text, marginX, y);
      y += sectionGap;
    };
    const addSubheading = (text) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.text(text, marginX, y);
      y += 12;
    };
    const addParagraph = (text) => {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(11);
      const maxWidth = doc.internal.pageSize.getWidth() - marginX * 2;
      const lines = doc.splitTextToSize(text, maxWidth);
      lines.forEach((l) => {
        if (y > doc.internal.pageSize.getHeight() - 56) {
          doc.addPage();
          y = 56;
        }
        doc.text(l, marginX, y);
        y += lineGap;
      });
      y += 2;
    };
    const addBulletList = (items) => {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(11);
      const maxWidth = doc.internal.pageSize.getWidth() - marginX * 2 - 14;
      items.forEach((it) => {
        const lines = doc.splitTextToSize(it, maxWidth);
        if (y > doc.internal.pageSize.getHeight() - 56) {
          doc.addPage();
          y = 56;
        }
        doc.text('•', marginX, y);
        doc.text(lines[0], marginX + 14, y);
        y += lineGap;
        for (let i = 1; i < lines.length; i++) {
          if (y > doc.internal.pageSize.getHeight() - 56) {
            doc.addPage();
            y = 56;
          }
          doc.text(lines[i], marginX + 14, y);
          y += lineGap;
        }
      });
      y += 2;
    };

    // Header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.text('Molla Md Sabit', marginX, y);
    y += 22;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.setTextColor(60);
    doc.text('Software Engineer and Researcher', marginX, y);
    y += 18;
    doc.setTextColor(0);
    addParagraph('GitHub: https://github.com/SabitMolla  |  LinkedIn: https://www.linkedin.com/in/your-profile  |  Portfolio: https://sabitmolla.github.io/Portfolio/');

    // Summary
    addHeading('Summary');
    addParagraph(
      "Computer Science graduate and researcher focused on deep learning, machine learning, computer vision, and full‑stack web development. Passionate about building practical solutions and contributing to impactful research."
    );

    // Skills
    addHeading('Skills');
    addSubheading('Languages & Frameworks');
    addParagraph('Python, C++, Java, JavaScript/React, SQL');
    addSubheading('Tools & Platforms');
    addParagraph('Docker, Git/GitHub, Kaggle, n8n');

    // Projects
    addHeading("Selected Projects");
    addBulletList([
      'Student–Teacher Communication App (2021) – Java-based application facilitating communication between UIU students and teachers.',
      'Smart Mine-Alert Shoe (2022) – Raspberry Pi–based system that detects metallic objects and alerts the user for safety.',
      'Disaster-Response Drone (2023) – Computer vision–enabled drone capable of human detection for rescue scenarios.',
      "Crowdfunding & Loan Web App (2024) – Platform designed for UIU students' financial needs.",
      'Farmer Assistant Web & Mobile App (2025) – Crop disease detection with computer vision and integrated chat assistant.'
    ]);

    // Commercial
    addSubheading('Commercial Work');
    addBulletList([
      'Manpower Agency Website (2025): https://scholarsconsultingltd.com/ ',
      'E‑commerce Website (2025): https://furnituredots.com/'
    ]);

    // Research
    addHeading('Research');
    addBulletList([
      'JailbreakTracer: Explainable Detection of Jailbreaking Prompts in LLMs Using Synthetic Data Generation (2025) – IEEE Q1. Link: https://www.researchgate.net/publication/392749895_JailbreakTracer_Explainable_Detection_of_Jailbreaking_Prompts_in_LLMs_Using_Synthetic_Data_Generation',
      'A Hybrid Deep Learning Framework for Rice Leaf Disease Detection and Classification Using DenseNet201 and YOLOv8 (2025) – Accepted (IEEE RAAICON).'
    ]);

    // Education
    addHeading('Education');
    addBulletList([
      'B.Sc. in Computer Science and Engineering – United International University (UIU), 2025 — CGPA 3.54/4.00.',
      'HSC, Science – Shaheed Begum Sheikh Fazilatun Nessa Mujib Government College, Dhaka, 2020.',
      'SSC, Science – Charbhairabi High School, 2018.'
    ]);

    // Save
    doc.save('Molla_Md_Sabit_Resume.pdf');
  }, []);

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
      <p>For recruiters and collaborators to reach me easily.</p>

      {/* contact icons */}
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: isMobile ? 'center' : 'flex-start',
        gap: isMobile ? '0.6rem' : '1rem',
        marginTop: '1rem'
      }}>
        {/* Facebook */}
        <a href="https://www.facebook.com/sabit.molla.92" target="_blank" rel="noopener noreferrer" title="Facebook">
          <img src="https://img.icons8.com/ios-filled/48/ffffff/facebook-new.png" alt="Facebook" style={{width: isMobile ? 40 : 48, height: isMobile ? 40 : 48}} />
        </a>

        {/* Instagram */}
        <a href="https://www.instagram.com/sabitmolla___12/" target="_blank" rel="noopener noreferrer" title="Instagram">
          <img src="https://img.icons8.com/ios-filled/48/ffffff/instagram-new.png" alt="Instagram" style={{width: isMobile ? 40 : 48, height: isMobile ? 40 : 48}} />
        </a>

        {/* WhatsApp (replace with your number) */}
        <a href="https://wa.me/+8801833797597" target="_blank" rel="noopener noreferrer" title="WhatsApp">
          <img src="https://img.icons8.com/ios-filled/48/ffffff/whatsapp.png" alt="WhatsApp" style={{width: isMobile ? 40 : 48, height: isMobile ? 40 : 48}} />
        </a>

        {/* Email (replace with your email) */}
        <a href="mailto:msabit212167@bscse.uiu.ac.bd" title="Email">
          <img src="https://img.icons8.com/ios-filled/48/ffffff/new-post.png" alt="Email" style={{width: isMobile ? 40 : 48, height: isMobile ? 40 : 48}} />
        </a>

        {/* GitHub */}
        <a href="https://github.com/SabitMolla" target="_blank" rel="noopener noreferrer" title="GitHub">
          <img src="https://img.icons8.com/ios-glyphs/48/ffffff/github.png" alt="GitHub" style={{width: isMobile ? 40 : 48, height: isMobile ? 40 : 48}} />
        </a>

        {/* LinkedIn placeholder - replace with your LinkedIn URL */}
        <a href="https://www.linkedin.com/in/mollamdsabit/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <img src="https://img.icons8.com/ios-filled/48/ffffff/linkedin.png" alt="LinkedIn" style={{width: isMobile ? 40 : 48, height: isMobile ? 40 : 48}} />
        </a>

        {/* force next items to a new line within flex container */}
        <div style={{ flexBasis: '100%', height: 0 }} />

        {/* Download Resume Button */}
        <div style={{ flexBasis: '100%', display: 'flex', justifyContent: isMobile ? 'center' : 'flex-start' }}>
          <button
            aria-label="Download Resume as PDF"
            onClick={handleDownloadResume}
            style={{
              marginTop: isMobile ? '0.5rem' : '0.75rem',
              padding: isMobile ? '10px 14px' : '12px 18px',
              background: 'linear-gradient(135deg, #4ea1ff, #27408B)',
              color: '#fff',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(0,0,0,0.15)'
            }}
          >
            Download Resume (PDF)
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
