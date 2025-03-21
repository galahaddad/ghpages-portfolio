'use client';

import { motion } from 'framer-motion';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="container-section">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <motion.h2 
          {...fadeInUp} 
          className="section-title"
        >
          About Me
        </motion.h2>

        <motion.div 
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-300 space-y-6"
        >
          <p>
            I'm a passionate software engineer dedicated to building innovative solutions 
            that make a meaningful impact. With a strong foundation in modern web technologies 
            and a keen eye for detail, I transform complex problems into elegant, efficient solutions.
          </p>
          
          <p>
            My mission is to leverage cutting-edge technology to create scalable, user-centric 
            applications that drive business success and enhance user experiences. I believe in 
            writing clean, maintainable code and staying at the forefront of technological advancement.
          </p>
        </motion.div>

        <motion.div 
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          <div className="card">
            <div className="text-[var(--accent)] text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
            <p className="text-gray-400">
              Approaching complex challenges with analytical thinking and creative solutions
            </p>
          </div>

          <div className="card">
            <div className="text-[var(--accent)] text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quick Learner</h3>
            <p className="text-gray-400">
              Adaptable and always eager to embrace new technologies and methodologies
            </p>
          </div>

          <div className="card">
            <div className="text-[var(--accent)] text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Team Player</h3>
            <p className="text-gray-400">
              Strong communicator focused on collaboration and knowledge sharing
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;