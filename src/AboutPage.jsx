import { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

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
      className={`border rounded-2xl p-4 md:p-6 mb-6 cursor-pointer transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 ${expanded ? 'border-primary shadow-xl shadow-primary/10 bg-white dark:bg-slate-900/80' : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40'}`}
      onClick={() => setExpanded((prev) => !prev)}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-bold text-lg text-primary">{title}</span>
          <span className="text-sm text-slate-500 dark:text-slate-400 truncate max-w-[250px] md:max-w-md">{preview}</span>
        </div>
        <span className={`material-symbols-outlined text-primary transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </div>

      <div
        ref={contentRef}
        style={{
          maxHeight: expanded ? height : 0,
          opacity: expanded ? 1 : 0,
        }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="w-full flex flex-col items-center py-12 px-6 lg:px-40">
      <div className="max-w-[960px] mx-auto space-y-16 w-full">
        {/* Hero/Profile Section */}
        <motion.section 
          className="flex flex-col md:flex-row gap-10 items-center md:items-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="shrink-0">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-2xl w-48 h-48 lg:w-56 lg:h-56 shadow-2xl shadow-primary/10 border-4 border-slate-100 dark:border-slate-800"
              style={{ backgroundImage: 'url("/Portfolio/Profile.jpg")' }}
            />
          </div>
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-2">Molla Md Sabit</h1>
            <p className="text-primary text-xl font-medium mb-4">Computer Science &amp; Engineering Graduate</p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-slate-500 dark:text-slate-400 mb-6">
              <span className="material-symbols-outlined text-sm">location_on</span>
              <span className="text-sm">Dhaka, Bangladesh</span>
            </div>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a href="/CV_MollaMDSabit.pdf" download className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-lg font-bold hover:opacity-90 transition-all">
                <span className="material-symbols-outlined text-sm">download</span>
                <span>Download CV</span>
              </a>
              <Link to="/contact" className="flex items-center gap-2 px-6 py-2.5 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-all">
                <span className="material-symbols-outlined text-sm">mail</span>
                <span>Contact Me</span>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Professional Bio */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-primary">person</span>
            <h2 className="text-2xl font-bold">Personal & Professional Bio</h2>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/40 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Who I Am</h3>
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                Hi, I'm Molla Md Sabit. I am a Computer Science student and researcher driven by the idea of solving real-world problems through technology. Whether it's training deep learning models or building smooth systems, I love the challenge of creating something new.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">What I Do</h3>
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                My expertise lies in deep learning, machine learning, and web development. I enjoy working on projects that push the boundaries of what's possible with technology, and I'm always eager to learn new skills and technologies to enhance my work.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">My Journey</h3>
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                From a young age, I've been fascinated by computers and technology. This passion led me to pursue a degree in Computer Science, where I've had the opportunity to work on various projects and research initiatives. Each experience has helped shape my understanding of the field and fueled my desire to make a meaningful impact through technology.
              </p>
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                I was born in Dhaka and raised in a village called Charbhairabi in the Haimchar upozila of Chandpur district. Growing up in a rural area, I developed a strong appreciation for the power of technology to connect people and improve lives. This background has inspired me to focus on creating solutions that are accessible and beneficial to diverse communities.
              </p>
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                During growing up in a village, I faced several challenges, including limited access to educational resources and technology. There was no electricity in our village when I was a kid. The roads were unpaved, and access to technology was limited. However, these obstacles only strengthened my determination to succeed and make a difference.
              </p>
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                As a Computer Science student, I am committed to using my skills and knowledge to help bridge the digital divide and create opportunities for others, regardless of their background or location.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Things I Love To Do</h3>
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                In my free time, I enjoy exploring new technologies, reading about advancements in AI and machine learning, and contributing to open-source projects. I also have a passion for traveling and reading fiction books.
              </p>
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                My favorite writer is Humayun Ahmed. His storytelling has always inspired me to think creatively and approach problems from different perspectives. Specially his himu caracter has a special place in my heart. How he solves problems in unique ways always motivates me to think outside the box. And not to forget his Misir Ali series, which combines mystery with deep psychological insights, has greatly influenced my analytical thinking skills.
              </p>
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                I also a huge fan of Sir Arthur Conan Doyle's Sherlock Holmes series, Agatha Christie's detective novels, Jules Verne's adventure stories, Muhammad Zafar Iqbal's science fiction works and Erich Maria Remarque's poignant narratives. Their works have not only entertained me but also enriched my understanding of human nature and the world around us.
              </p>
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                I'm also huge fan of Marvel and DC comics and movies. The creativity and imagination in these stories have always fascinated me and inspired me to think beyond conventional boundaries. Specially the character Bruce Wayne aka Batman has always been my favorite. His intelligence, resourcefulness, and determination to fight injustice resonate deeply with me. I also love to talk about scitific concepts and theories some youtubers like Vsauce, Kurzgesagt, Veritasium, etc help me a lot to quench my curiosity about the world.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Technical Skills */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-primary">psychology</span>
            <h2 className="text-2xl font-bold">Technical Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">code</span>
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase">Python</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase">Java</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase">JavaScript</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase">C++</span>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">layers</span>
                Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase">React</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase">Node.js</span>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">database</span>
                Database & Cloud
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase">SQL</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase">Docker</span>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">build</span>
                Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase">Git</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase">Kaggle</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase">N8N</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-primary">school</span>
            <h2 className="text-2xl font-bold">Education History</h2>
          </div>

          <ExpandableBox
            title="Bachelor's in Computer Science & Engineering"
            preview="United International University (UIU) • 2025"
          >
            <p>
              During my time at UIU, I gained extensive knowledge and hands-on experience in various areas of computer science, including programming, algorithms, data structures, databases, web development, and artificial intelligence.
            </p>
            <p className="mt-2 text-primary font-bold">Graduated with CGPA: 3.54/4.00</p>
          </ExpandableBox>

          <ExpandableBox
            title="Higher Secondary Certificate (HSC)"
            preview="Shaheed Begum Sheikh Fazilatun Nessa Mujib Government College • 2020"
          >
            <p>
              During my HSC, I continued to focus on Science subjects, further deepening my knowledge and skills in areas that are crucial for a career in technology and computer science.
            </p>
            <p className="mt-2 text-primary font-bold">GPA: 4.50/5.00</p>
          </ExpandableBox>

          <ExpandableBox
            title="Secondary School Certificate (SSC)"
            preview="Charbhairabi High School • 2018"
          >
            <p>
              My focus was on Science, where I developed a strong foundation in subjects like Mathematics, Physics, and Chemistry, which sparked my interest in pursuing a career in Computer Science.
            </p>
            <p className="mt-2 text-primary font-bold">GPA: 4.78/5.00</p>
          </ExpandableBox>
        </motion.section>
      </div>
    </div>
  );
}

export default AboutPage;