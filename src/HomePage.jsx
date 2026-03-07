import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="layout-content-container flex flex-col max-w-[1200px] w-full flex-1">
        {/* Hero Section */}
        <div className="@container px-4">
          <div className="flex flex-col gap-8 py-12 md:py-24 @[864px]:flex-row @[864px]:items-center">
            <div className="w-full relative @[864px]:w-1/2 order-2 @[864px]:order-1">
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
                  <Link to="/projects" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-base font-bold transition-all hover:shadow-xl hover:shadow-primary/30 active:scale-95">
                    <span className="truncate">View My Work</span>
                  </Link>
                  <Link to="/contact" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-base font-bold transition-all hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95">
                    <span className="truncate">Contact Me</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full @[864px]:w-1/2 order-1 @[864px]:order-2">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-2xl">
                <img alt="Technology visualization" className="w-full h-full object-cover opacity-80 mix-blend-overlay dark:mix-blend-normal" data-alt="Abstract blue glowing digital circuit board pattern" src="/Portfolio/Profile.jpg" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Expertise Section */}
        <section className="py-12 px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-tight">Key Expertise</h2>
              <div className="h-1.5 w-12 bg-primary rounded-full mt-2"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-8 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5">
              <div className="flex items-center justify-center size-14 rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-3xl">code</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-slate-900 dark:text-white text-xl font-bold">Software Engineering</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Proficient in full-stack development using React, Node.js, and Python. Focused on writing clean, maintainable, and scalable code.
                </p>
              </div>
            </div>
            <div className="group flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-8 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5">
              <div className="flex items-center justify-center size-14 rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-3xl">database</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-slate-900 dark:text-white text-xl font-bold">Data Science</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Experienced in statistical modeling, data visualization, and building machine learning pipelines with TensorFlow and Scikit-learn.
                </p>
              </div>
            </div>
            <div className="group flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-8 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5">
              <div className="flex items-center justify-center size-14 rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-3xl">cloud</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-slate-900 dark:text-white text-xl font-bold">Cloud Computing</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Skilled in deploying applications using AWS and Docker. Knowledgeable in microservices architecture and CI/CD workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Header */}
        <section className="py-12 px-4 mb-20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <h2 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-tight">Featured Projects</h2>
              <p className="text-slate-600 dark:text-slate-400 mt-2">A selection of my recent technical achievements.</p>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
              View all projects
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-800">
              <div className="aspect-video w-full overflow-hidden">
                <img alt="Analytics Dashboard" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Modern dark analytics dashboard with colorful charts" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVgHwIbBzja7QPyGlRBBrCFiWc1DVdCJkrZeSxxn4gH0Ld3TxIWOnm80IkyVwDApO1gil9gc16e-Rdxk7-yUbbWbrlcZZWQx43HLXVcFUwcLA9f_KpXkhhRFa0sPAHOF0nowuwMlO-We0TJhb5aEwKZdDC5fy8_eFgTX6kCG4mdnNGX9QbrZWNgFTdWfrapRKUX3mFNaiOCx0kK1YHyXsfu2g8fuw4afvjqsDdv_Sv5lw4ZNHhQdM2vd_kokcJrjP9gOJqvPdGFLi8" />
              </div>
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-700 text-xs font-semibold">React</span>
                  <span className="px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-700 text-xs font-semibold">Python</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Real-time Data Analytics Platform</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">A high-performance dashboard processing over 1M events per second with sub-second latency.</p>
                <Link to="/projects" className="flex items-center gap-2 text-primary font-bold">
                  Case Study
                  <span className="material-symbols-outlined">chevron_right</span>
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-800">
              <div className="aspect-video w-full overflow-hidden">
                <img alt="Security System" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Digital encryption and security lock visual" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlTOw7fPnU4STonkivigRQBxBJl4zdDH934rXUDodLdDzUqoPQGKkyMw_2BuUkVcy3WhBZNvIGy3OM1OA-0Oq2L8dRcMvCcr1F-2Z_L5LoDbCQQv9cLw2OfOoZQ5lu4xGeH88Py3RCFAJ82W0AwwCYxo9J3gHEXRjBYrsltAmQ8L1-ZxJJ651mh4vX2GUzN26jndBQ5J4T4ZENSmFdmk5Ej_Py-cCvtJp2lR55k1QKxvfeEHnHiVjFf_FvXcZtFbAqedZBiFxNGcpT" />
              </div>
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-700 text-xs font-semibold">Node JS</span>
                  <span className="px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-700 text-xs font-semibold">MongoDB</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Distributed Auth Service</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">Secure, decentralized authentication system built for large-scale microservice environments.</p>
                <Link to="/projects" className="flex items-center gap-2 text-primary font-bold">
                  Case Study
                  <span className="material-symbols-outlined">chevron_right</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
