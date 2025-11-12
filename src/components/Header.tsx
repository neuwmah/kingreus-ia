'use client';

import { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';

import { contactGeneral } from "@/utils/whatsapp";

export default function Header() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = 'KingReus IA';
  const typingSpeed = 100;
  const deletingSpeed = 150;
  const pauseTime = 3000;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const type = () => {
      if (!isDeleting) {
        // Digitando
        if (displayText.length < fullText.length) {
          setDisplayText(fullText.slice(0, displayText.length + 1));
          timeout = setTimeout(type, typingSpeed);
        } else {
          // Pausa antes de começar a deletar
          timeout = setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deletando
        if (displayText.length > 0) {
          setDisplayText(fullText.slice(0, displayText.length - 1));
          timeout = setTimeout(type, deletingSpeed);
        } else {
          // Pausa antes de começar a digitar novamente
          setIsDeleting(false);
          timeout = setTimeout(type, 500);
        }
      }
    };

    timeout = setTimeout(type, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <header className="bg-black border-b border-[#212121] h-20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <a className="flex mr-auto space-x-4 items-center" href="/">
            <div className="h-12 w-12 rounded-md overflow-hidden relative border-[#313131] border">
              <img 
                className="absolute top-0 left-0 w-full h-full object-contain" 
                src="/logo.jpg"
                alt="logo"
              />
            </div>
            <span className="text-xl font-semibold flex items-center">
              👑 {displayText}
              <span className="ml-1 font-base animate-pulse text-green-400">|</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="/" 
              className="text-white text-sm hover:text-green-400 transition-colors duration-200"
            >
              Planos
            </a>
            <button
              onClick={contactGeneral}
              className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 h-10 rounded-lg transition-colors duration-200 cursor-pointer flex items-center justify-center"
            >
              Fale conosco
            </button>
          </div>

          {/* Mobile Menu */}
          <MobileMenu onContactClick={contactGeneral} />
        </div>
      </nav>
    </header>
  );
}