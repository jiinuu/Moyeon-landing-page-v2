import React, { useState } from 'react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'history') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 px-6 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Side: Logo & Department Name */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
          <img 
            src="https://github.com/jiinuu/jiinuu.github.io/blob/6c703d1744c6cd2f18b9a09a75712ed60f23f53a/Screenshot%202025-12-18%20191440.png?raw=true" 
            alt="한양대학교 ERICA 소프트웨어융합대학" 
            className="h-10 md:h-12 w-auto object-contain"
          />
          
          {/* Department Name (Target Style) */}
          <div className="flex flex-col justify-center">
             <span className="text-sm md:text-base font-black text-slate-900 leading-none tracking-tight">
               수리데이터사이언스학과
             </span>
             <span className="text-[10px] md:text-[11px] font-semibold text-slate-500 leading-none mt-0.5 uppercase tracking-tighter">
               Mathematical Data Science
             </span>
          </div>
          
          {/* Divider */}
          <div className="hidden md:block h-6 w-px bg-gray-200 ml-2"></div>

          {/* Official Mark (Lab Name) */}
          <div className="hidden md:flex items-center gap-2">
             <div className="w-8 h-8 flex items-center justify-center bg-[#2563EB] rounded-lg shadow-sm">
                <img 
                  src="https://github.com/jiinuu/jiinuu.github.io/blob/6c703d1744c6cd2f18b9a09a75712ed60f23f53a/402337326_657879323001534_477076322436472498_n.jpg?raw=true" 
                  alt="아이콘" 
                  className="w-8 h-8 rounded-lg object-cover"
                />
             </div>
             
             {/* ▼▼▼ 변경됨: 학과명과 동일한 스타일 적용 ▼▼▼ */}
             <span className="text-sm md:text-base font-black text-slate-900 leading-none tracking-tight">
                모두의 문제연구소
             </span>
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