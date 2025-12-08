import { useState, useRef, useEffect } from "react";

function ExpandableBox({ title, preview, children }) {
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (expanded && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [expanded, children]);

  return (
    <div
      style={{
        border: "1px solid #007bff",
        borderRadius: "20px",
        padding: "12px 20px",
        margin: "20px auto",
        maxWidth: "500px",
        cursor: "pointer",
        boxShadow: expanded ? "0 2px 8px rgba(0,123,255,0.15)" : "none",
        transition: "box-shadow 0.2s"
      }}
      onClick={() => setExpanded((prev) => !prev)}
    >
      <span style={{ fontWeight: "500", color: "#007bff" }}>
        {title}
      </span>
      <div style={{ marginTop: "8px", color: "#333", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
        {preview}
      </div>
      <div
        ref={contentRef}
        style={{
          maxHeight: expanded ? height : 0,
          opacity: expanded ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s",
          marginTop: expanded ? "12px" : "0px",
          color: "#fff"
        }}
      >
        {children}
      </div>
    </div>
  );
}

function AboutPage() {
  // Responsive: track window width
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const isMobile = windowWidth < 700;

  return (
    <>
      <div style={{ padding: isMobile ? '10px' : '20px', marginTop: isMobile ? '30px' : '60px', maxWidth: isMobile ? '98vw' : '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
        <h2>Who I Am</h2>
        <p>Hi, I'm Molla Md Sabit. I am a Computer Science student and researcher driven by the idea of solving real-world problems through technology. Whether it's training deep learning models or building smooth systems, I love the challenge of creating something new.</p>
        <h2>What I Do</h2>
        <p>My expertise lies in deep learning, machine learning, and web development. I enjoy working on projects that push the boundaries of what's possible with technology, and I'm always eager to learn new skills and technologies to enhance my work.</p>
        <h2>My Journey</h2>
        <p>From a young age, I've been fascinated by computers and technology. This passion led me to pursue a degree in Computer Science, where I've had the opportunity to work on various projects and research initiatives. Each experience has helped shape my understanding of the field and fueled my desire to make a meaningful impact through technology.
          I was born in Dhaka and raised in a village called Charbhairabi in the Haimchar upozila of Chandpur district. Growing up in a rural area, I developed a strong appreciation for the power of technology to connect people and improve lives. This background has inspired me to focus on creating solutions that are accessible and beneficial to diverse communities.
          During growing up in a village, I faced several challenges, including limited access to educational resources and technology. There was no electricity in our village when I was a kid. The roads were unpaved, and access to technology was limited.  However, these obstacles only strengthened my determination to succeed and make a difference. 
          As a Computer Science student, I am committed to using my skills and knowledge to help bridge the digital divide and create opportunities for others, regardless of their background or location. 
        </p>
        <h2>Things I Love To Do</h2>
        <p>In my free time, I enjoy exploring new technologies, reading about advancements in AI and machine learning, and contributing to open-source projects. I also have a passion for traveling reading fiction books.
          My favorite writer is Humayun Ahmed. His storytelling has always inspired me to think creatively and approach problems from different perspectives. Specially his himu caracter has a special place in my heart. 
          How he solves problems in unique ways always motivates me to think outside the box. And not to forget his Misir Ali series, which combines mystery with deep psychological insights, has greatly influenced my analytical thinking skills.
          I also a huge fan of Sir Arthur Conan Doyle's Sherlock Holmes series, Agatha Christie's detective novels, Jules Verne's adventure stories, Muhammad Zafar Iqbal's science fiction works and Erich Maria Remarque's poignant narratives. 
          Their works have not only entertained me but also enriched my understanding of human nature and the world around us. I'm also huge fan of Marvel and DC comics and movies. The creativity and imagination in these stories have always fascinated me and inspired me to think beyond conventional boundaries.
          Specially the character Bruce Wayne aka Batman has always been my favorite. His intelligence, resourcefulness, and determination to fight injustice resonate deeply with me. I also love to talk about scitific concepts and theories some youtubers like Vsauce, Kurzgesagt, Veritasium, etc help me a lot to quench my curiosity about the world.
          </p>
      </div>
      <h1 style={{ textAlign: "center", marginTop: isMobile ? "20px" : "40px" }}>Education</h1>
      <ExpandableBox
        title="SSC - 2018"
        preview="Click to see more about my SSC education">
        <p>
          I completed my Secondary School Certificate (SSC) in 2018 from Charbhairabi High School in my village. My focus was on Science, where I developed a strong foundation in subjects like Mathematics, Physics, and Chemistry, which sparked my interest in pursuing a career in Computer Science.
          My results were GPA: 4.78/5.00. 
        </p>
      </ExpandableBox>
      <ExpandableBox
        title="HSC - 2020"
        preview="Click to see more about my HSC education">
        <p>
          I completed my Higher Secondary Certificate (HSC) in 2020 from Shaheed Begum Sheikh Fazilatun Nessa Mujib Government College, Hazaribagh, Dhaka.
          During my HSC, I continued to focus on Science subjects, further deepening my knowledge and skills in areas that are crucial for a career in technology and computer science. 
          There was the time of the COVID-19 pandemic during my HSC studies, which presented unique challenges. However, I adapted to online learning and remained committed to my education despite the difficulties.
          The exam was cancled and results were based on previous academic performance. My results were GPA: 4.50/5.00.
        </p>
      </ExpandableBox>
      <ExpandableBox
        title="Bachelor's in Computer Science - 2025"
        preview="Click to see more about my Bachelor's education">
        <p>
          I completed my Bachelor's degree in Computer Science and Engineering from United International University (UIU) in 2025.
          During my time at UIU, I gained extensive knowledge and hands-on experience in various areas of computer science, including programming, algorithms, data structures, databases, web development, and artificial intelligence. 
          I actively participated in projects that allowed me to apply theoretical concepts to real-world scenarios, further enhancing my skills and understanding of the field.
          My academic performance was strong throughout my studies, and I graduated with a CGPA of 3.54/4.00.
        </p>
      </ExpandableBox>
    </>
  );
}

export default AboutPage;