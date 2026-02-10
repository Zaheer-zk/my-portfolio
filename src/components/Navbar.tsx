'use client';

import { motion } from 'framer-motion';
import { Home, User, Code, Briefcase, Mail } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { name: 'Home', icon: <Home className="w-5 h-5" />, href: '#home' },
  { name: 'About', icon: <User className="w-5 h-5" />, href: '#about' },
  { name: 'Experience', icon: <Briefcase className="w-5 h-5" />, href: '#experience' },
  { name: 'Projects', icon: <Code className="w-5 h-5" />, href: '#projects' },
  { name: 'Skills', icon: <Briefcase className="w-5 h-5" />, href: '#skills' },
  { name: 'Contact', icon: <Mail className="w-5 h-5" />, href: '#contact' }, // Note: Skills section contains contact
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, type: 'spring', stiffness: 120 }}
        className="flex items-center gap-2 px-2 py-2 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-full shadow-2xl relative"
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setActiveTab(item.name)}
            className={`relative px-4 py-2 rounded-full transition-colors duration-300 flex items-center gap-2 ${
              activeTab === item.name ? 'text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            {activeTab === item.name && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-blue-600 rounded-full -z-10"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{item.icon}</span>
            <span className={`relative z-10 text-sm font-medium hidden md:block ${
                activeTab === item.name ? 'block' : 'hidden md:block'
            }`}>
                {item.name}
            </span>
          </a>
        ))}
      </motion.div>
    </div>
  );
}
