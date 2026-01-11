
import React, { useState } from 'react';

interface NavbarProps {
  onNavigate: (view: any) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 px-6 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center cursor-pointer group" onClick={() => onNavigate('home')}>
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 flex items-center justify-center bg-[#2563EB] rounded-xl shadow-md shadow-blue-200 group-hover:scale-105 transition-transform">
                <img src="https://github.com/jiinuu/jiinuu.github.io/blob/6c703d1744c6cd2f18b9a09a75712ed60f23f53a/402337326_657879323001534_477076322436472498_n.jpg?raw=true" alt="모두의 문제연구소 로고" className="w-full h-full object-cover rounded-xl" />
             </div>
             <div className="flex flex-col justify-center">
                <span className="text-xl md:text-2xl font-black text-slate-900 leading-none tracking-tight group-hover:text-[#2563EB] transition-colors">모두의 문제연구소</span>
             </div>
          </div>
          <div className="hidden md:block h-8 w-px bg-slate-200 mx-5"></div>
          <div className="hidden md:flex flex-col justify-center opacity-60 group-hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-2 mb-0.5">
               <img src="https://github.com/jiinuu/jiinuu.github.io/blob/6c703d1744c6cd2f18b9a09a75712ed60f23f53a/Screenshot%202025-12-18%20191440.png?raw=true" alt="한양대학교" className="h-3 w-auto grayscale" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">Affiliated with</span>
            </div>
             <span className="text-xs font-bold text-slate-800 tracking-tight leading-none">한양대 ERICA 수리데이터사이언스학과</span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold">
           <div className="flex space-x-6 text-gray-600">
            <button onClick={() => onNavigate('research')} className="hover:text-[#2563EB] transition-colors">리서치</button>
            <button onClick={() => onNavigate('activity')} className="hover:text-[#2563EB] transition-colors">저널리즘</button>
            <button onClick={() => onNavigate('history')} className="hover:text-[#2563EB] transition-colors">연혁</button>
           </div>
          <button onClick={() => onNavigate('apply')} className="bg-[#2563EB] text-white px-6 py-2.5 rounded-full hover:bg-[#1d4ed8] transition-colors font-bold shadow-md shadow-blue-200 transform hover:-translate-y-0.5">함께하기</button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col space-y-4 shadow-xl font-semibold animate-fade-in-down z-50">
          <button onClick={() => { onNavigate('research'); setIsOpen(false); }} className="text-lg text-gray-600 text-left hover:text-[#2563EB]">리서치</button>
          <button onClick={() => { onNavigate('activity'); setIsOpen(false); }} className="text-lg text-gray-600 text-left hover:text-[#2563EB]">저널리즘</button>
          <button onClick={() => { onNavigate('history'); setIsOpen(false); }} className="text-lg text-gray-600 text-left hover:text-[#2563EB]">연혁</button>
          <div className="pt-2">
            <button onClick={() => { onNavigate('apply'); setIsOpen(false); }} className="w-full bg-[#2563EB] text-white px-6 py-4 rounded-xl font-bold text-center shadow-lg shadow-blue-100">함께하기</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
