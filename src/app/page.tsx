'use client';

import Image from "next/image";
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Blog />
      <Contact />
    </main>
  );
}
