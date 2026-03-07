import { useState } from "react";

function ProjectsPage() {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Academic', 'Commercial', 'Research'];

  return (
    <div className="w-full flex flex-col items-center bg-background-light dark:bg-background-dark min-h-screen py-10 px-6 md:px-20 lg:px-40">
      <div className="layout-content-container flex flex-col max-w-[1200px] w-full flex-1">

        {/* Hero Section */}
        <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-slate-900 dark:text-slate-100 text-5xl font-black leading-tight tracking-[-0.033em]">Creative Works</p>
            <p className="text-slate-600 dark:text-slate-400 text-lg font-normal leading-relaxed max-w-2xl">
              A curated selection of my latest digital experiences, web applications, and research contributions.
              Built with precision, performance, and modern technologies.
            </p>
          </div>
        </div>

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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Internal University Project 1 */}
          {(activeTab === 'All' || activeTab === 'Academic') && (
            <div className="group flex flex-col bg-slate-50 dark:bg-slate-900/50 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5">
              <div className="p-6 h-full flex flex-col">
                <div className="flex gap-2 mb-3">
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary rounded">Academic (2025)</span>
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-500 rounded">React Native</span>
                </div>
                <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold mb-2">Agri Tech App</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  Created a web application and it's mobile app version for the farmer. Where farmer upload their crops and find what kind of diseases they have. And can chat with a chat model.
                </p>
              </div>
            </div>
          )}

          {/* Internal University Project 2 */}
          {(activeTab === 'All' || activeTab === 'Academic') && (
            <div className="group flex flex-col bg-slate-50 dark:bg-slate-900/50 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5">
              <div className="p-6 h-full flex flex-col">
                <div className="flex gap-2 mb-3">
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary rounded">Academic (2024)</span>
                </div>
                <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold mb-2">UIU Crowdfunding platform</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  Created a web application for crowedfounding and loan for the UIU studets.
                </p>
              </div>
            </div>
          )}

          {/* Internal University Project 3 */}
          {(activeTab === 'All' || activeTab === 'Academic') && (
            <div className="group flex flex-col bg-slate-50 dark:bg-slate-900/50 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5">
              <div className="p-6 h-full flex flex-col">
                <div className="flex gap-2 mb-3">
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary rounded">Academic (2023)</span>
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-purple-500/10 text-purple-500 rounded">CV</span>
                </div>
                <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold mb-2">Search & Rescue Drone</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  Developed a smart drone capable of detecting humans using computer vision. This drone can be utilized during disaster scenarios to assist in rescue operations.
                </p>
              </div>
            </div>
          )}

          {/* Internal University Project 4 */}
          {(activeTab === 'All' || activeTab === 'Academic') && (
            <div className="group flex flex-col bg-slate-50 dark:bg-slate-900/50 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5">
              <div className="p-6 h-full flex flex-col">
                <div className="flex gap-2 mb-3">
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary rounded">Academic (2022)</span>
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-sky-500/10 text-sky-500 rounded">IoT</span>
                </div>
                <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold mb-2">Smart Safety Shoe</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  Developed a smart shoe project that alerts the user if they step on a mine. Built using Raspberry Pi, the system detects when the user steps on metallic objects and sends a signal for safety. In case of stepping on a mine, plaster of Paris can be used to secure the shoe to the mine, preventing accidental detonation.
                </p>
              </div>
            </div>
          )}

          {/* Internal University Project 5 */}
          {(activeTab === 'All' || activeTab === 'Academic') && (
            <div className="group flex flex-col bg-slate-50 dark:bg-slate-900/50 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5">
              <div className="p-6 h-full flex flex-col">
                <div className="flex gap-2 mb-3">
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary rounded">Academic (2021)</span>
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-orange-500/10 text-orange-500 rounded">Java</span>
                </div>
                <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold mb-2">UIU Comm</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  Developed a application for communicating between UIU student and teachers build in java.
                </p>
              </div>
            </div>
          )}

          {/* Commercial 1 */}
          {(activeTab === 'All' || activeTab === 'Commercial') && (
            <div className="group flex flex-col bg-slate-50 dark:bg-slate-900/50 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5">
              <div className="relative w-full aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center gap-4">
                  <a className="p-3 bg-slate-900 text-white rounded-full hover:bg-primary transition-colors" href="https://scholarsconsultingltd.com/#home" target="_blank" rel="noopener noreferrer">
                    <span className="material-symbols-outlined text-xl">link</span>
                  </a>
                </div>
                <div className="w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-slate-400">language</span>
                </div>
              </div>
              <div className="p-6 h-full flex flex-col">
                <div className="flex gap-2 mb-3">
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-500 rounded">Commercial (2025)</span>
                </div>
                <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold mb-2">Scholars Consulting Ltd</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  Developed a website for a Manpower agency Company.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
                  <a className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all" href="https://scholarsconsultingltd.com/#home" target="_blank" rel="noopener noreferrer">
                    View Project <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Commercial 2 */}
          {(activeTab === 'All' || activeTab === 'Commercial') && (
            <div className="group flex flex-col bg-slate-50 dark:bg-slate-900/50 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5">
              <div className="relative w-full aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center gap-4">
                  <a className="p-3 bg-slate-900 text-white rounded-full hover:bg-primary transition-colors" href="https://furnituredots.com/" target="_blank" rel="noopener noreferrer">
                    <span className="material-symbols-outlined text-xl">link</span>
                  </a>
                </div>
                <div className="w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-slate-400">shopping_cart</span>
                </div>
              </div>
              <div className="p-6 h-full flex flex-col">
                <div className="flex gap-2 mb-3">
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-500 rounded">Commercial (2025)</span>
                </div>
                <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold mb-2">FurnitureDots</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  Built a modern E-commerce website for furniture sales.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
                  <a className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all" href="https://furnituredots.com/" target="_blank" rel="noopener noreferrer">
                    View Project <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Research 1 */}
          {(activeTab === 'All' || activeTab === 'Research') && (
            <div className="group flex flex-col bg-slate-50 dark:bg-slate-900/50 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5">
              <div className="p-6 h-full flex flex-col">
                <div className="flex gap-2 mb-3">
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-violet-500/10 text-violet-500 rounded">Research (2025)</span>
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-yellow-500/10 text-yellow-500 rounded">IEEE Q1</span>
                </div>
                <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold mb-2">JailbreakTracer</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  Explainable Detection of Jailbreaking Prompts in LLMs Using Synthetic Data Generation (It's an IEEE Q1 Paper)
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
                  <a className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all" href="https://www.researchgate.net/publication/392749895_JailbreakTracer_Explainable_Detection_of_Jailbreaking_Prompts_in_LLMs_Using_Synthetic_Data_Generation" target="_blank" rel="noopener noreferrer">
                    Read Paper <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Research 2 */}
          {(activeTab === 'All' || activeTab === 'Research') && (
            <div className="group flex flex-col bg-slate-50 dark:bg-slate-900/50 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5">
              <div className="p-6 h-full flex flex-col">
                <div className="flex gap-2 mb-3">
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-violet-500/10 text-violet-500 rounded">Research (2025)</span>
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-sky-500/10 text-sky-500 rounded">IEEE</span>
                </div>
                <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold mb-2">Rice Leaf Disease Detection</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  A Hybrid Deep Learning Framework for Rice Leaf Disease Detection and Classification Using DenseNet201 and YOLOv8
                  <br /><br />
                  <span className="italic text-xs">(IEEE RAAICON paper already accepted and presented in the conference, pending publication)</span>
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;