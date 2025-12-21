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

function ProjectsPage() {
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
        <h2>My Interests</h2>
        <p>I have a deep interest in various fields of computer science, particularly in web development, machine learning, and artificial intelligence, coumputer vision etc.
          I enjoy working on projects that challenge me to learn new skills and technologies. 
        </p>
      </div>
      <h1 style={{ textAlign: "center", marginTop: isMobile ? "20px" : "40px" }}>Projects</h1>
      <ExpandableBox
        title="Projects That I Done During My Bechalor's"
        preview="Click to see more">
        <ul style={{ paddingLeft: isMobile ? '1.2em' : '2em', fontSize: isMobile ? '1em' : '1.1em' }}>
          <li>1.(2021)Developed a application for communicating between UIU student and teachers build in java. </li>
          <li>2.(2022) Developed a smart shoe project that alerts the user if they step on a mine. Built using Raspberry Pi, the system detects when the user steps on metallic objects and sends a signal for safety. In case of stepping on a mine, plaster of Paris can be used to secure the shoe to the mine, preventing accidental detonation.</li>
          <li>3.(2023) Developed a smart drone capable of detecting humans using computer vision. This drone can be utilized during disaster scenarios to assist in rescue operations.</li>
          <li>4.(2024) Created a web application for crowedfounding and loan for the UIU studets.</li>
          <li>5.(2025) Created a web application and it's mobile app version for the farmer. Where farmer upload their crops and find what kind of diseases they have. And can chat with a chat model. </li>
        </ul>
      </ExpandableBox>
      <ExpandableBox
        title="Commercial Projects"
        preview="Click to see more">
        <ul style={{ paddingLeft: isMobile ? '1.2em' : '2em', fontSize: isMobile ? '1em' : '1.1em' }}>
        <li>1.(2025)Developed a website for a Manpower agency Company <a 
            href="https://scholarsconsultingltd.com/#home" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: "#4ea1ff", textDecoration: "underline" }}
            >
            [Visit Site]</a>
        </li>
        <li>1.(2025)Build an E-commerce website <a 
            href="https://furnituredots.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: "#4ea1ff", textDecoration: "underline" }}
            >
            [Visit Site]</a>
        </li>

        </ul>
      </ExpandableBox>
      <h1 style={{ textAlign: "center", marginTop: isMobile ? "20px" : "40px" }}>Research Papers(Already Accepted Ones)</h1>
      <ExpandableBox
        title="RESEARCH PAPERS PUBLISHED"
        preview="Click to see more">
        <ul style={{ paddingLeft: isMobile ? '1.2em' : '2em', fontSize: isMobile ? '1em' : '1.1em' }}>
        <li>1.(2025)JailbreakTracer: Explainable Detection of Jailbreaking Prompts in LLMs Using Synthetic Data Generation(It's an IEEE Q1 Paper) <a 
            href="https://www.researchgate.net/publication/392749895_JailbreakTracer_Explainable_Detection_of_Jailbreaking_Prompts_in_LLMs_Using_Synthetic_Data_Generation" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: "#4ea1ff", textDecoration: "underline" }}
            >
            [See it]</a>
        </li>
        <li>2.(2025)A Hybrid Deep Learning Framework for Rice Leaf Disease Detection and Classification Using DenseNet201 and YOLOv8 (ieee raaicon paper already accepted and presented in the conference not published yet)          
        </li>
        </ul>
      </ExpandableBox>
    </>
  );
}

export default ProjectsPage;