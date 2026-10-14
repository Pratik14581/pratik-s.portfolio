import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-indigo-600/80 hover:bg-indigo-600 text-white backdrop-blur-md shadow-lg shadow-indigo-600/30 border border-indigo-400/30 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 focus:outline-none"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
