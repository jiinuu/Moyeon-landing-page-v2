
import React, { useState } from 'react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'history') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 px-6 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Side: Hanyang University Logo Image */}
        <div className="flex items-center gap-6 cursor-pointer" onClick={() => onNavigate('home')}>
          <img 
            src="http://computing.hanyang.ac.kr/img/logo_hy.gif" 
            alt="한양대학교 ERICA 소프트웨어융합대학" 
            className="h-10 md:h-12 w-auto object-contain"
          />
          
          {/* Divider */}
          <div className="hidden md:block h-6 w-px bg-gray-200"></div>

          {/* Official Mark (Small Version for Navbar) */}
          <div className="hidden md:flex items-center gap-2">
             <div className="w-8 h-8 flex items-center justify-center bg-[#2563EB] rounded-lg shadow-sm">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 7H11V17H7V7Z" fill="currentColor" rx="1"/>
                  <path d="M13 7H17V17H13V7Z" fill="currentColor" rx="1"/>
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2"/>
                </svg>
             </div>
             <span className="font-bold text-slate-800 text-sm tracking-tight">모두의 문제연구소</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold">
           <div className="flex space-x-6 text-gray-600">
            <button onClick={() => onNavigate('home')} className="hover:text-[#2563EB] transition-colors">리서치</button>
            <button onClick={() => onNavigate('home')} className="hover:text-[#2563EB] transition-colors">저널리즘</button>
            <button onClick={() => onNavigate('history')} className="hover:text-[#2563EB] transition-colors">연혁</button>
           </div>
          <button className="bg-[#2563EB] text-white px-6 py-2.5 rounded-full hover:bg-[#1d4ed8] transition-colors font-bold shadow-md shadow-blue-200">
            함께하기
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col space-y-4 shadow-lg font-semibold animate-fade-in-down">
          <button onClick={() => { onNavigate('home'); setIsOpen(false); }} className="text-lg text-gray-600 text-left">리서치</button>
          <button onClick={() => { onNavigate('home'); setIsOpen(false); }} className="text-lg text-gray-600 text-left">저널리즘</button>
          <button onClick={() => { onNavigate('history'); setIsOpen(false); }} className="text-lg text-gray-600 text-left">연혁</button>
          <hr />
          <button className="bg-[#2563EB] text-white px-6 py-3 rounded-full font-bold">
            함께하기
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
