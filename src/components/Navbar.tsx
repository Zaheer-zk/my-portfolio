'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Code, Briefcase, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { name: 'Home', icon: <Home className="w-5 h-5" />, href: '#home' },
  { name: 'About', icon: <User className="w-5 h-5" />, href: '#about' },
  { name: 'Experience', icon: <Briefcase className="w-5 h-5" />, href: '#experience' },
  { name: 'Projects', icon: <Code className="w-5 h-5" />, href: '#projects' },
  { name: 'Skills', icon: <Briefcase className="w-5 h-5" />, href: '#skills' },
  { name: 'Contact', icon: <Mail className="w-5 h-5" />, href: '#contact' },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop/Tablet Floating Dock */}
      <div className="hidden md:flex fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, type: 'spring', stiffness: 120 }}
          className="flex items-center gap-2 px-2 py-2 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-full shadow-2xl"
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
              <span className="relative z-10 text-sm font-medium">
                {item.name}
              </span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-3 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-full text-white shadow-lg"
          aria-label="Toggle menu"
        >
           {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl pt-24 px-6 flex flex-col items-center gap-8"
          >
             {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActiveTab(item.name);
                  setIsMobileOpen(false);
                }}
                className={`flex items-center gap-4 text-2xl font-medium transition-colors ${
                   activeTab === item.name ? 'text-blue-500' : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.icon}
                {item.name}
              </a>
             ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
