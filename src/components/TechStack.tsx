'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code, 
  Database, 
  Globe, 
  Layout, 
  Server, 
  Smartphone, 
  Terminal, 
  Cpu
} from 'lucide-react';

const technologies = [
  { name: 'React', icon: <Code className="w-full h-full" /> },
  { name: 'Next.js', icon: <Globe className="w-full h-full" /> },
  { name: 'Tailwind', icon: <Layout className="w-full h-full" /> },
  { name: 'Node.js', icon: <Server className="w-full h-full" /> },
  { name: 'PostgreSQL', icon: <Database className="w-full h-full" /> },
  { name: 'TypeScript', icon: <Terminal className="w-full h-full" /> },
  { name: 'Mobile', icon: <Smartphone className="w-full h-full" /> },
  { name: 'System', icon: <Cpu className="w-full h-full" /> },
];

function AppIcon({ mouseX, icon }: { mouseX: any; icon: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square rounded-full bg-slate-800 flex items-center justify-center p-2 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors cursor-pointer border border-slate-700"
    >
      {icon}
    </motion.div>
  );
}

export default function TechStack() {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="flex justify-center items-center py-20 pb-32">
        <div className="relative">
            <motion.div
                onMouseMove={(e) => mouseX.set(e.pageX)}
                onMouseLeave={() => mouseX.set(Infinity)}
                className="mx-auto flex h-16 items-end gap-4 rounded-2xl bg-slate-900/50 px-4 pb-3 pt-3 border border-slate-800 backdrop-blur-md"
            >
                {technologies.map((tech, index) => (
                <AppIcon key={index} mouseX={mouseX} icon={tech.icon} />
                ))}
            </motion.div>
             <p className="text-center text-slate-500 mt-4 text-sm">Tech Stack</p>
        </div>
    </div>
  );
}
