"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Code, Rocket, Server, Users } from "lucide-react";

interface TimelineItem {
  id: number;
  date: string;
  title: string;
  company: string;
  description: string;
  icon: React.ReactNode;
  tags?: string[];
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    date: "Dec 2025 – Present",
    title: "Senior Software Development Engineer",
    company: "EDGE Corporation (Abu Dhabi)",
    description: "Architecting scalable enterprise frontend and backend features. Focusing on high-performance systems and secure data handling for government-grade applications.",
    icon: <Server className="w-6 h-6 text-blue-400" />,
    tags: ["Enterprise Scale", "Backend Architecture", "Security"],
  },
  {
    id: 2,
    date: "Jan 2025 – Nov 2025",
    title: "Software Development Engineer",
    company: "TAMM (Hidden Brains)",
    description: "Developed ICP Chatbot Services showcased at GITEX. Successfully migrated the TAMM CMS from Sitecore to Payload CMS, improving content management efficiency.",
    icon: <Rocket className="w-6 h-6 text-purple-400" />,
    tags: ["ICP Chatbot", "GITEX", "Payload CMS Migration"],
  },
  {
    id: 3,
    date: "May 2022 – Dec 2024",
    title: "Full Stack Developer",
    company: "Fexle Services (Xoriant)",
    description: "Built robust web applications using React, Node.js, and NestJS. Optimized RESTful APIs for scalability and implemented complex business logic.",
    icon: <Code className="w-6 h-6 text-green-400" />,
    tags: ["React", "NestJS", "API Optimization"],
  },
  {
    id: 4,
    date: "Jan 2020 – Apr 2022",
    title: "Web Developer",
    company: "Hostlelo Web Solution",
    description: "Led a team of 3 developers, mentoring juniors and improving application deployment workflows. Delivered multiple client projects on time.",
    icon: <Users className="w-6 h-6 text-yellow-400" />,
    tags: ["Team Leadership", "Deployment Workflows", "Mentorship"],
  },
  {
    id: 5,
    date: "Jul 2019 – Sep 2019",
    title: "Web Development Intern",
    company: "DVS Web Infotech",
    description: "Built responsive UI components and ensured cross-browser compatibility. Gained hands-on experience with modern web development practices.",
    icon: <Briefcase className="w-6 h-6 text-pink-400" />,
    tags: ["UI Components", "Responsive Design"],
  },
];

export const Timeline = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="experience" className="py-20 w-full bg-slate-950 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-10 max-w-5xl">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
                >
                    Career Timeline
                </motion.h2>

                <div ref={containerRef} className="relative w-full">
                    {/* The Center Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-800 transform md:-translate-x-1/2">
                        <motion.div 
                            style={{ height }}
                            className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                        />
                    </div>

                    {timelineData.map((item, index) => (
                        <TimelineCard key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const TimelineCard = ({ item, index }: { item: TimelineItem; index: number }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div 
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring" }}
            className={`relative flex items-center justify-between mb-12 md:mb-24 w-full ${
                isEven ? "md:flex-row-reverse" : "md:flex-row"
            }`}
        >
            {/* Empty Space for alternate side */}
            <div className="hidden md:block w-5/12" />

            {/* Timeline Node/Dot */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-slate-950 border-2 border-slate-700 shadow-xl group-hover:border-blue-500 transition-colors">
               <motion.div 
                 whileInView={{ scale: [1, 1.2, 1] }}
                 transition={{ duration: 0.5 }}
                 className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"
               />
            </div>

            {/* Content Card */}
            <div className="w-full md:w-5/12 pl-12 md:pl-0">
                <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:border-slate-700 transition-all duration-300 group"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-slate-800 text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-colors">
                            {item.icon}
                        </div>
                        <span className="text-sm font-semibold text-blue-400 tracking-wider uppercase">{item.date}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-slate-400 font-medium mb-3">{item.company}</p>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                        {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {item.tags?.map((tag, i) => (
                            <span 
                                key={i}
                                className="px-3 py-1 text-xs rounded-full bg-slate-800 text-slate-300 border border-slate-700 group-hover:border-blue-500/30 transition-colors"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};
