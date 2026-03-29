import React from 'react';
import { motion } from 'framer-motion';

function ContactPage() {
  // Download CV PDF
  const handleDownloadResume = React.useCallback(() => {
    const link = document.createElement('a');
    link.href = '/CV_MollaMDSabit.pdf';
    link.download = 'CV_MollaMDSabit.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div className="w-full flex flex-col items-center bg-background-light dark:bg-background-dark min-h-screen py-10 px-6 md:px-20 lg:px-40">
      <div className="layout-content-container flex flex-col max-w-[960px] w-full flex-1 gap-12">

        {/* Header Section */}
        <motion.section 
          className="flex flex-col gap-6 items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4 border mb-2 shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-5xl text-primary">forum</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight">Let's Connect</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Whether you have a question, a project to discuss, or just want to say hi, my inbox is open. I’ll try my best to get back to you!
          </p>
        </motion.section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mt-8">

          {/* Main Contact Form / Info container */}
          <motion.div 
            className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-8 lg:p-10 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none flex flex-col gap-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">send</span>
              Drop a Message
            </h2>

            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-bold text-slate-700 dark:text-slate-300">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-bold text-slate-700 dark:text-slate-300">Your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-700 dark:text-slate-300">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="How can we help you?"
                  className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-y placeholder:text-slate-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 mt-2 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover shadow-lg shadow-primary/30 transition-all hover:-translate-y-1 active:translate-y-0 flex justify-center items-center gap-2"
              >
                <span className="material-symbols-outlined text-xl">near_me</span>
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Socials & Info */}
          <motion.div 
            className="flex flex-col gap-8 justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >

            <div className="bg-primary text-white rounded-2xl p-8 lg:p-10 shadow-xl shadow-primary/20 flex flex-col gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full blur-3xl transform -translate-x-10 translate-y-10"></div>

              <h3 className="text-2xl font-bold relative z-10 flex items-center gap-2">
                <span className="material-symbols-outlined">contact_page</span>
                Get Resume
              </h3>
              <p className="text-primary-light relative z-10">
                Download my full resume to see a detailed overview of my experience, education, and technical skills.
              </p>
              <div className="mt-auto relative z-10">
                <button
                  onClick={handleDownloadResume}
                  className="w-full py-4 bg-white text-primary font-bold rounded-xl hover:bg-slate-50 transition-all flex justify-center items-center gap-2"
                >
                  <span className="material-symbols-outlined">download</span>
                  Download PDF
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-bold border-b border-slate-200 dark:border-slate-800 pb-3">Social Profiles</h3>
              <div className="grid grid-cols-2 gap-4">
                <a href="https://github.com/SabitMolla" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700">
                  <img src="https://img.icons8.com/ios-glyphs/48/4ea1ff/github.png" alt="GitHub" className="w-8 h-8 filter dark:invert" />
                  <span className="font-bold text-sm">GitHub</span>
                </a>

                <a href="https://www.linkedin.com/in/mollamdsabit/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700">
                  <img src="https://img.icons8.com/ios-filled/48/4ea1ff/linkedin.png" alt="LinkedIn" className="w-8 h-8 filter dark:invert" />
                  <span className="font-bold text-sm">LinkedIn</span>
                </a>

                <a href="https://www.facebook.com/sabit.molla.92" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700">
                  <img src="https://img.icons8.com/ios-filled/48/4ea1ff/facebook-new.png" alt="Facebook" className="w-8 h-8 filter dark:invert" />
                  <span className="font-bold text-sm">Facebook</span>
                </a>

                <a href="https://www.instagram.com/sabitmolla___12/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700">
                  <img src="https://img.icons8.com/ios-filled/48/4ea1ff/instagram-new.png" alt="Instagram" className="w-8 h-8 filter dark:invert" />
                  <span className="font-bold text-sm">Instagram</span>
                </a>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="flex flex-col gap-4 mt-2">
              <a href="mailto:msabit212167@bscse.uiu.ac.bd" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Email Me</p>
                  <p className="font-medium">msabit212167@bscse.uiu.ac.bd</p>
                </div>
              </a>
              <a href="https://wa.me/+8801833797597" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">chat</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">WhatsApp</p>
                  <p className="font-medium">+8801833797597</p>
                </div>
              </a>
            </div>

          </motion.div>
        </div>

      </div>
    </div>
  );
}

export default ContactPage;
