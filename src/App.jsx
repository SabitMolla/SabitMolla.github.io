import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navbar from './Navbar';
import HomePage from './HomePage';
import ProjectsPage from './ProjectsPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Your professional introduction, immediate skills summary, and quick links to your best work.</p>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <p>Detailed documentation and links (GitHub, live demo) for your major technical accomplishments.</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>Your professional story, detailed skills breakdown, and academic/work experience history.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <p>Simple forms and links (Email, LinkedIn, GitHub) for recruiters and collaborators to reach you easily.</p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App
