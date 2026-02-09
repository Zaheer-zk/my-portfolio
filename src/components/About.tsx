'use client';

import { motion } from 'framer-motion';
import { Award, Briefcase, Code } from 'lucide-react';

const achievements = [
  {
    icon: <Briefcase className="w-8 h-8 text-blue-400" />,
    title: "ICP Chatbot Services",
    description: "Developed AI-driven chatbot services for GITEX at TAMM, enhancing user engagement and automation.",
  },
  {
    icon: <Award className="w-8 h-8 text-purple-400" />,
    title: "Team Leadership",
    description: "Led development teams at Hostlelo Web Solution, driving projects to successful production delivery.",
  },
  {
    icon: <Code className="w-8 h-8 text-green-400" />,
    title: "Global Coding Rank",
    description: "Solved 400+ DSA problems and achieved a Global Rank of 348 on CodeChef, demonstrating strong algorithmic skills.",
  },
];

export default function About() {
  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-900 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            I am a passionate Senior Software Engineer with a track record of building scalable applications and solving complex problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="mb-6 p-4 bg-slate-800 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
