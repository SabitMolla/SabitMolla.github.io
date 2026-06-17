import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

// Helper to loop/wrap values smoothly
const wrap = (min, max, value) => {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
};

const projectsData = [
  {
    id: 1,
    title: "Agri Tech App",
    category: "Academic",
    year: "2025",
    tags: [
      { text: "React Native", className: "bg-emerald-500/10 text-emerald-500" },
      { text: "Django", className: "bg-emerald-500/10 text-emerald-500" }
    ],
    description: "Created a web application and its mobile app version for the farmer, allowing crop uploads, disease diagnosis, and integration with an AI chat model.",
    link: "https://drive.google.com/file/d/1n7JCbcYV137yIutyuv4qQF7HbiCCrDm7/view?usp=sharing",
    linkLabel: "View Documentation",
    icon: "open_in_new"
  },
  {
    id: 2,
    title: "UIU Crowdfunding platform",
    category: "Academic",
    year: "2024",
    tags: [],
    description: "Created a web application for crowdfunding and educational loans tailored for UIU students."
  },
  {
    id: 3,
    title: "Search & Rescue Drone",
    category: "Academic",
    year: "2023",
    tags: [
      { text: "CV", className: "bg-purple-500/10 text-purple-500" }
    ],
    description: "Developed a smart drone capable of detecting humans using computer vision. This drone can be utilized during disaster scenarios to assist in rescue operations."
  },
  {
    id: 4,
    title: "Smart Safety Shoe",
    category: "Academic",
    year: "2022",
    tags: [
      { text: "IoT", className: "bg-sky-500/10 text-sky-500" }
    ],
    description: "Developed a smart shoe project that alerts the user if they step on a mine. Built using Raspberry Pi, the system detects metallic objects and sends safety signals. In case of mine stepping, plaster of Paris can secure the shoe to prevent detonation."
  },
  {
    id: 5,
    title: "UIU Comm",
    category: "Academic",
    year: "2021",
    tags: [
      { text: "Java", className: "bg-orange-500/10 text-orange-500" }
    ],
    description: "Developed a communication application for UIU students and teachers built in Java."
  },
  {
    id: 6,
    title: "Scholars Consulting Ltd",
    category: "Commercial",
    year: "2025",
    tags: [],
    description: "Developed a professional website for a manpower agency company.",
    link: "https://scholarsconsultingltd.com/#home",
    linkLabel: "View Project",
    icon: "arrow_forward",
    mediaIcon: "language"
  },
  {
    id: 7,
    title: "FurnitureDots",
    category: "Commercial",
    year: "2025",
    tags: [],
    description: "Built a modern, responsive e-commerce website for furniture sales.",
    link: "https://furnituredots.com/",
    linkLabel: "View Project",
    icon: "arrow_forward",
    mediaIcon: "shopping_cart"
  },
  {
    id: 8,
    title: "JailbreakTracer",
    category: "Research",
    year: "2025",
    tags: [
      { text: "IEEE Q1", className: "bg-yellow-500/10 text-yellow-500" }
    ],
    description: "Explainable detection of jailbreaking prompts in LLMs using synthetic data generation (IEEE Q1 publication).",
    link: "https://www.researchgate.net/publication/392749895_JailbreakTracer_Explainable_Detection_of_Jailbreaking_Prompts_in_LLMs_Using_Synthetic_Data_Generation",
    linkLabel: "Read Paper",
    icon: "open_in_new"
  },
  {
    id: 9,
    title: "Rice Leaf Disease Detection",
    category: "Research",
    year: "2025",
    tags: [
      { text: "IEEE", className: "bg-sky-500/10 text-sky-500" }
    ],
    description: "A hybrid deep learning framework for rice leaf disease detection and classification using DenseNet201 and YOLOv8.\n\n(IEEE RAAICON paper already accepted and presented in the conference, pending publication)",
    link: "https://drive.google.com/file/d/1VPSYufQ4dAEqM5F4YEpZ3_x81TKItNZo/view?usp=drive_link",
    linkLabel: "Read Paper",
    icon: "open_in_new"
  },
  {
    id: 10,
    title: "Neon Flow Game",
    category: "Commercial",
    year: "2026",
    tags: [],
    description: "Neon Flow is a fast-paced, neon-themed 2D platformer available in playstore",
    link: "https://play.google.com/store/apps/details?id=com.neonflow.sabit.game&pcampaignid=web_share",
    linkLabel: "View Project",
    icon: "arrow_forward",
    mediaIcon: "games"
  }
];

const getCategoryColor = (category) => {
  switch (category) {
    case 'Academic': return 'bg-primary/10 text-primary';
    case 'Commercial': return 'bg-emerald-500/10 text-emerald-500';
    case 'Research': return 'bg-violet-500/10 text-violet-500';
    default: return 'bg-slate-500/10 text-slate-500';
  }
};

const ProjectCard = ({ project }) => {
  return (
    <div className="group flex flex-col bg-slate-50 dark:bg-slate-900/50 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5 h-full">
      {project.mediaIcon && (
        <div className="relative w-full aspect-video overflow-hidden flex-shrink-0">
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center gap-4">
            <a className="p-3 bg-slate-900 text-white rounded-full hover:bg-primary transition-colors cursor-pointer" href={project.link} target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined text-xl">link</span>
            </a>
          </div>
          <div className="w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
            <span className="material-symbols-outlined text-4xl text-slate-400">{project.mediaIcon}</span>
          </div>
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded ${getCategoryColor(project.category)}`}>
              {project.category} ({project.year})
            </span>
            {project.tags && project.tags.map((tag, idx) => (
              <span key={idx} className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded ${tag.className}`}>
                {tag.text}
              </span>
            ))}
          </div>
          <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 whitespace-pre-line">
            {project.description}
          </p>
        </div>
        
        {project.link && (
          <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800 mt-auto">
            <a className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all cursor-pointer" href={project.link} target="_blank" rel="noopener noreferrer">
              {project.linkLabel} <span className="material-symbols-outlined text-sm">{project.icon}</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

function ProjectsPage() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Academic', 'Commercial', 'Research'];

  const filteredProjects = projectsData.filter(
    (project) => activeTab === 'All' || project.category === activeTab
  );

  // Duplicate the list 3 times to guarantee that it overflows and provides a seamless loop
  const duplicatedProjects = [...filteredProjects, ...filteredProjects, ...filteredProjects];

  const containerRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const baseX = useMotionValue(0);
  const speed = 40; // Pixels per second speed

  // Track and update the width of a single set of items
  useEffect(() => {
    if (containerRef.current) {
      setContentWidth(containerRef.current.scrollWidth / 3);
    }
  }, [filteredProjects]);

  // Reset scroll position on filter tab changes
  useEffect(() => {
    baseX.set(0);
  }, [activeTab]);

  // Handle continuous marquee animation
  useAnimationFrame((t, delta) => {
    if (!isDragging && !isHovered && contentWidth > 0) {
      let nextX = baseX.get() - (speed * (delta / 1000));
      nextX = wrap(-contentWidth, 0, nextX);
      baseX.set(nextX);
    }
  });

  // Handle snapping back into wrapping boundaries when user stops dragging
  const handleDragEnd = (event, info) => {
    setIsDragging(false);
    if (contentWidth > 0) {
      const currentX = baseX.get();
      const wrappedX = wrap(-contentWidth, 0, currentX);
      baseX.set(wrappedX);
    }
  };

  return (
    <div className="w-full flex flex-col items-center bg-background-light dark:bg-background-dark min-h-screen py-10 px-6 md:px-20 lg:px-40">
      <div className="layout-content-container flex flex-col max-w-[1200px] w-full flex-1">

        {/* Hero Section */}
        <motion.div 
          className="flex flex-wrap justify-between items-end gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-slate-900 dark:text-slate-100 text-5xl font-black leading-tight tracking-[-0.033em]">Creative Works</p>
            <p className="text-slate-600 dark:text-slate-400 text-lg font-normal leading-relaxed max-w-2xl">
              A curated selection of my latest digital experiences, web applications, and research contributions.
              Built with precision, performance, and modern technologies.
            </p>
          </div>
        </motion.div>

        {/* Filters Tab */}
        <div className="mb-10">
          <div className="flex border-b border-slate-200 dark:border-slate-800 px-2 gap-8 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex flex-col items-center justify-center pb-4 pt-2 transition-all border-b-[3px] ${activeTab === tab
                  ? 'border-primary text-slate-900 dark:text-slate-100'
                  : 'border-transparent text-slate-500 hover:text-primary'
                  }`}
              >
                <p className="text-sm font-bold leading-normal tracking-[0.015em]">{tab}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Slider Container */}
        <div className="relative w-full overflow-hidden py-6 select-none">
          {/* Elegant gradients to fade out edge contents */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-background-light via-background-light/80 to-transparent dark:from-background-dark dark:via-background-dark/80 dark:to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-background-light via-background-light/80 to-transparent dark:from-background-dark dark:via-background-dark/80 dark:to-transparent z-10 pointer-events-none" />
          
          <motion.div
            ref={containerRef}
            className="flex gap-8 cursor-grab active:cursor-grabbing w-max items-stretch py-4"
            style={{ x: baseX }}
            drag="x"
            dragConstraints={{
              left: -contentWidth * 2,
              right: 0,
            }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {duplicatedProjects.map((project, idx) => (
              <div
                key={`${project.id}-${idx}`}
                className="w-[320px] md:w-[380px] flex-shrink-0"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;