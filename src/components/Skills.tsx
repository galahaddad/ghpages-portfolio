'use client';

import { motion } from 'framer-motion';

interface Skill {
  category: string;
  items: {
    name: string;
    level: number;
  }[];
}

const skills: Skill[] = [
  {
    category: "Frontend Development",
    items: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Framer Motion", level: 80 }
    ]
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "GraphQL", level: 75 },
      { name: "PostgreSQL", level: 85 }
    ]
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "CI/CD", level: 85 }
    ]
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section id="skills" className="container-section">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-5xl mx-auto"
      >
        <h2 className="section-title">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              variants={itemVariants}
              className="card"
            >
              <h3 className="text-xl font-bold mb-6 text-[var(--accent)]">
                {skillGroup.category}
              </h3>

              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-darker)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={itemVariants}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 max-w-2xl mx-auto">
            Continuously learning and staying up-to-date with the latest technologies and best practices
            in software development. Always excited to explore new tools and frameworks.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;