'use client';

import { motion } from 'framer-motion';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    period: "2023 - Present",
    description: [
      "Led development of enterprise-scale data analytics platform",
      "Architected microservices infrastructure serving 1M+ daily users",
      "Mentored junior developers and established best practices"
    ],
    technologies: ["React", "Node.js", "AWS", "Kubernetes"]
  },
  {
    title: "Software Engineer",
    company: "Digital Solutions Lab",
    period: "2021 - 2023",
    description: [
      "Developed real-time monitoring dashboard for IoT devices",
      "Optimized database queries reducing latency by 40%",
      "Implemented CI/CD pipelines improving deployment efficiency"
    ],
    technologies: ["TypeScript", "Python", "PostgreSQL", "Docker"]
  },
  {
    title: "Full Stack Developer",
    company: "Future Web Corp",
    period: "2019 - 2021",
    description: [
      "Built responsive web applications using modern frameworks",
      "Integrated third-party APIs and payment systems",
      "Contributed to open-source projects and internal libraries"
    ],
    technologies: ["JavaScript", "Vue.js", "MongoDB", "GraphQL"]
  }
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience" className="container-section bg-black/50">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-4xl mx-auto"
      >
        <h2 className="section-title">Professional Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-[var(--border)] transform -translate-x-1/2" />

          {/* Experience items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 ${
                index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-[var(--accent)] rounded-full transform -translate-x-1/2 mt-2" />

              {/* Content */}
              <div className={`${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:col-start-2'}`}>
                <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                <div className="text-[var(--accent)] font-semibold mb-2">{exp.company}</div>
                <div className="text-gray-400 mb-4">{exp.period}</div>
                <ul className="text-gray-300 space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-[var(--accent)]/10 text-[var(--accent)] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Spacer for alternating layout */}
              <div className={`hidden md:block ${index % 2 === 0 ? 'md:col-start-2' : ''}`} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;