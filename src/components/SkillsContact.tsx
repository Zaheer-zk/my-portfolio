'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

const skills = {
  Languages: ["TypeScript", "JavaScript", "Java", "Python", "SQL"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "ShadCN UI", "Framer Motion", "Redux"],
  Backend: ["Node.js", "NestJS", "Express", "PostgreSQL", "MongoDB", "AWS"],
};

export default function SkillsContact() {
  return (
    <section className="py-20 bg-slate-950 text-white relative">
      <div className="container mx-auto px-4">
        
        {/* Skills Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Skills</h2>
            <p className="text-slate-400">My technical toolkit and expertise.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-colors"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span key={skill} className="bg-slate-800 px-3 py-1 rounded-md text-sm text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12 rounded-2xl border border-slate-700 shadow-2xl"
          >
            <div className="flex flex-col md:flex-row gap-12">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
                <p className="text-slate-400 mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
                
                <div className="space-y-4">
                  <a href="https://github.com/Zaheer-zk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                    <Github className="w-6 h-6" />
                    <span>Zaheer-zk</span>
                  </a>
                  <a href="https://linkedin.com/in/zaheerzk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                    <Linkedin className="w-6 h-6" />
                    <span>zaheerzk</span>
                  </a>
                  <a href="mailto:hello@example.com" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                    <span>hello@example.com</span>
                  </a>
                </div>
              </div>

              <div className="flex-1">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                    <input type="text" id="name" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Your Name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                    <input type="email" id="email" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                    <textarea id="message" rows={4} className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Tell me about your project..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
