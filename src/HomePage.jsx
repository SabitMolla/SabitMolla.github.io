import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import useDocumentTitle from './useDocumentTitle';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';

function HomePage() {
  useDocumentTitle('Molla MD Sabit | Software Engineer & Researcher');
  return (
    <div className="w-full flex flex-col items-center">
      <div className="layout-content-container flex flex-col w-full flex-1">
        {/* HomePage Header / Hero Content */}
        <section id="home" className="flex flex-col items-center w-full max-w-[1200px] mx-auto">
          {/* Hero Section */}
          <div className="@container px-4 w-full">
            <div className="flex flex-col gap-8 py-12 md:py-24 @[864px]:flex-row @[864px]:items-center">
              <motion.div 
                className="w-full relative @[864px]:w-1/2 order-2 @[864px]:order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4 text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                      </span>
                      Available for new roles
                    </div>
                    <h1 className="text-slate-900 dark:text-white text-5xl md:text-7xl font-black leading-tight tracking-[-0.033em]">
                      Hi I am <span className="text-primary">Molla Md Sabit</span>
                    </h1>
                    <h2 className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-normal leading-relaxed max-w-[500px]">
                      Software Engineer and Researcher. Crafting elegant solutions to complex digital problems.
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <a href="#projects" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-base font-bold transition-all hover:shadow-xl hover:shadow-primary/30 active:scale-95">
                      <span className="truncate">View My Work</span>
                    </a>
                    <a href="#contact" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-base font-bold transition-all hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95">
                      <span className="truncate">Contact Me</span>
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="w-full @[864px]:w-1/2 order-1 @[864px]:order-2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                <div className="relative aspect-square rounded-3xl overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-2xl">
                  <img alt="Technology visualization" className="w-full h-full object-cover opacity-80 mix-blend-overlay dark:mix-blend-normal" data-alt="Abstract blue glowing digital circuit board pattern" src="/Portfolio/Profile.jpg" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Key Expertise Section */}
          <div className="py-12 px-4 w-full">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-tight">Key Expertise</h2>
                <div className="h-1.5 w-12 bg-primary rounded-full mt-2"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                className="group flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-8 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-center justify-center size-14 rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-3xl">code</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-900 dark:text-white text-xl font-bold">Software Engineering</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Proficient in full-stack development using React, Node.js, and Python. Focused on writing clean, maintainable, and scalable code.
                  </p>
                </div>
              </motion.div>
              <motion.div 
                className="group flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-8 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center justify-center size-14 rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-3xl">database</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-900 dark:text-white text-xl font-bold">Data Science</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Experienced in statistical modeling, data visualization, and building machine learning pipelines with TensorFlow and Scikit-learn.
                  </p>
                </div>
              </motion.div>
              <motion.div 
                className="group flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-8 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center justify-center size-14 rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-3xl">cloud</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-900 dark:text-white text-xl font-bold">Cloud Computing</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Skilled in deploying applications using AWS and Docker. Knowledgeable in microservices architecture and CI/CD workflows.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section Imports */}
        <section id="about" className="w-full">
          <AboutPage />
        </section>

        <section id="projects" className="w-full">
          <ProjectsPage />
        </section>

        <section id="contact" className="w-full">
          <ContactPage />
        </section>

      </div>
    </div>
  );
}

export default HomePage;
