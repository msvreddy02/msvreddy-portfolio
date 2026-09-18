import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Spotlight from './components/Spotlight';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Certifications from './pages/Certifications';

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#0B0F17] flex flex-col justify-between relative overflow-hidden">
      {/* Interactive Cursor Spotlight Glow */}
      <Spotlight />
      
      <Navbar />
      
      <main className="grow z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/certifications" element={<Certifications />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}