'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { div } from 'framer-motion/client';

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
        <div className="mb-24" id="skills">
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
        <div className="max-w-4xl mx-auto" id="contact">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
             <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
             <p className="text-slate-400">
                Open for opportunities and collaborations.
             </p>
          </motion.div>

          <div className="flex justify-center">
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900 dark:bg-zinc-900">
                <div className="flex flex-col items-center">
                    <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    Zaheer Khan
                    </p>
            
                    <div className="flex flex-col gap-4 mt-4 w-full">
                        <a href="https://linkedin.com/in/zaheerzk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors bg-slate-800 p-3 rounded-lg w-full justify-center">
                            <Linkedin className="w-5 h-5" />
                            <span>LinkedIn</span>
                        </a>
                        <a href="mailto:khanzaheersami@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors bg-slate-800 p-3 rounded-lg w-full justify-center">
                            <Mail className="w-5 h-5" />
                            <span>Email Me</span>
                        </a>
                        <div className="flex items-center gap-3 text-slate-300 bg-slate-800 p-3 rounded-lg w-full justify-center">
                             <Phone className="w-5 h-5" />
                            <span>+91 81144 18543</span>
                        </div>
                         <a href="https://github.com/Zaheer-zk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors bg-slate-800 p-3 rounded-lg w-full justify-center">
                            <Github className="w-5 h-5" />
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            </BackgroundGradient>
          </div>
        </div>

      </div>
    </section>
  );
}
