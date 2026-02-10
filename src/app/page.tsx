import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import SkillsContact from "@/components/SkillsContact";
import Navbar from "@/components/Navbar";
import TechStack from "@/components/TechStack";
import { Timeline } from "@/components/Timeline";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-blue-500 selection:text-white relative">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <TechStack />
      <Projects />
      <SkillsContact />
      
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-900">
        <p>&copy; {new Date().getFullYear()} Zaheer Khan. All rights reserved.</p>
        <p className="mt-2">Built with Next.js, Tailwind CSS & Framer Motion</p>
      </footer>
    </main>
  );
}
