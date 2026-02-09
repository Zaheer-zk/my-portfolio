'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "NEVON App",
    description: "A movie discovery platform built with React and TMDB API, featuring search, details, and responsive design.",
    tags: ["React", "TMDB API", "CSS Modules"],
    links: { github: "#", demo: "#" },
  },
  {
    title: "Public Free APIs",
    description: "A curated platform for developers to discover free APIs, serving over 400+ active users.",
    tags: ["Next.js", "Node.js", "API Integration"],
    links: { github: "#", demo: "#" },
  },
  {
    title: "MedusaJS E-commerce",
    description: "A multi-seller e-commerce platform leveraging MedusaJS for backend and Next.js for frontend.",
    tags: ["MedusaJS", "Next.js", "PostgreSQL"],
    links: { github: "#", demo: "#" },
  },
  {
    title: "Gym Management App",
    description: "Comprehensive management solution for gyms, tracking members, subscriptions, and attendance.",
    tags: ["React Native", "Firebase", "Redux"],
    links: { github: "#", demo: "#" },
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-slate-400">A selection of my recent work and experiments.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-slate-950 rounded-xl overflow-hidden border border-slate-800 shadow-lg hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 group"
                >
                    <div className="p-8 h-full flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">{project.title}</h3>
                            <div className="flex gap-4">
                                <a href={project.links.github} className="text-slate-400 hover:text-white transition-colors"><Github size={20}/></a>
                                <a href={project.links.demo} className="text-slate-400 hover:text-white transition-colors"><ExternalLink size={20}/></a>
                            </div>
                        </div>
                        <p className="text-slate-400 mb-6 flex-grow">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tags.map(tag => (
                                <span key={tag} className="bg-slate-800 text-blue-300 text-xs px-3 py-1 rounded-full border border-slate-700">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
