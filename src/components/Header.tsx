'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4
        ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-[var(--border)]' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white">
          <span className="text-[var(--accent)]">Portfolio</span>
        </Link>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><Link href="#about" className="text-white hover:text-[var(--accent)] transition-colors">About</Link></li>
            <li><Link href="#projects" className="text-white hover:text-[var(--accent)] transition-colors">Projects</Link></li>
            <li><Link href="#skills" className="text-white hover:text-[var(--accent)] transition-colors">Skills</Link></li>
            <li><Link href="#experience" className="text-white hover:text-[var(--accent)] transition-colors">Experience</Link></li>
            <li><Link href="#blog" className="text-white hover:text-[var(--accent)] transition-colors">Blog</Link></li>
            <li><Link href="#contact" className="text-white hover:text-[var(--accent)] transition-colors">Contact</Link></li>
          </ul>
        </nav>
        
        <div className="md:hidden">
          {/* Mobile menu button - can be expanded later */}
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;