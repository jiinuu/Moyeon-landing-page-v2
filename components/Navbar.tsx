
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-10">
          <div className="text-2xl font-black tracking-tighter text-[#008CFF]">모두의 문제연구소</div>
          <div className="hidden md:flex space-x-8 text-sm font-semibold text-gray-600">
            <a href="#" className="hover:text-black">리서치</a>
            <a href="#" className="hover:text-black">저널리즘</a>
            <a href="#" className="hover:text-black">인사이트 리그</a>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6 text-sm font-semibold">
          <a href="#" className="text-gray-600 hover:text-black">아카이브</a>
          <button className="bg-[#008CFF] text-white px-6 py-2.5 rounded-full hover:bg-[#0074d6] transition-colors font-bold">
            함께하기
          </button>
        </div>

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
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col space-y-4 shadow-lg font-semibold">
          <a href="#" className="text-lg text-gray-600">리서치</a>
          <a href="#" className="text-lg text-gray-600">저널리즘</a>
          <a href="#" className="text-lg text-gray-600">인사이트 리그</a>
          <hr />
          <button className="bg-[#008CFF] text-white px-6 py-3 rounded-full font-bold">
            함께하기
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
