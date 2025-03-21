'use client';

import { motion } from 'framer-motion';

const Blog = () => {
  return (
    <section id="blog" className="container-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="section-title">Blog</h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative aspect-[16/9] w-full"
        >
          {/* Replace YOUR_SUBSTACK_NAME with your actual Substack name */}
          <iframe
            src="https://YOUR_SUBSTACK_NAME.substack.com/embed"
            className="w-full h-[800px] bg-black/50 border border-[var(--border)] rounded-lg"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400 max-w-2xl mx-auto">
            Subscribe to my newsletter for regular insights about software development,
            tech trends, and professional growth.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Blog;