'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "AI-Powered Analytics Platform",
    description: "Enterprise-grade analytics platform leveraging machine learning for predictive insights",
    image: "/window.svg",
    tags: ["React", "TypeScript", "Python", "TensorFlow"],
    link: "#"
  },
  {
    title: "Global Supply Chain Dashboard",
    description: "Real-time visualization platform for tracking global supply chain metrics",
    image: "/globe.svg",
    tags: ["Next.js", "D3.js", "GraphQL", "PostgreSQL"],
    link: "#"
  },
  {
    title: "Blockchain Integration System",
    description: "Secure blockchain infrastructure for enterprise data verification",
    image: "/file.svg",
    tags: ["Solidity", "Web3.js", "Node.js", "AWS"],
    link: "#"
  }
];

const Projects = () => {
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="container-section bg-black/50">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="card group cursor-pointer"
              onClick={() => window.open(project.link, '_blank')}
            >
              <div className="relative h-48 mb-6 overflow-hidden rounded-md">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[var(--accent)]">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-sm bg-[var(--accent)]/10 text-[var(--accent)] rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;