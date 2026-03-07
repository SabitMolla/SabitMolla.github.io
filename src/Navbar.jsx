import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useTheme from './useTheme';

function Navbar() {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    // { to: '/blog', label: 'Blog' },
    { to: '/projects', label: 'Works' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 md:px-20 lg:px-40 py-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-3 text-primary">
        <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg">
          <span className="material-symbols-outlined text-primary">terminal</span>
        </div>
        <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Portfolio</h2>
      </div>

      <div className="flex flex-1 justify-end gap-8 items-center">
        <nav className="hidden md:flex items-center gap-9">
          {links.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`${isActive
                  ? 'text-primary font-bold border-b-2 border-primary pb-1'
                  : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors'
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Dark/Light Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center size-10 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all active:scale-90"
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <span className="material-symbols-outlined text-xl text-slate-700 dark:text-slate-200">
            {isDark ? 'light_mode' : 'dark_mode'}
          </span>
        </button>

        <a
          href="/Portfolio/CV.pdf"
          download
          className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold transition-all hover:opacity-90 active:scale-95 shadow-lg shadow-primary/25"
        >
          <span className="truncate">Resume</span>
        </a>
      </div>
    </header>
  );
}

export default Navbar;
