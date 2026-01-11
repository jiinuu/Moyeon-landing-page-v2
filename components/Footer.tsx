import React from 'react';

interface FooterProps {
  onNavigate: (view: 'home' | 'history') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10">
        
        {/* Brand Section */}
        <div className="col-span-2 space-y-6">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
             {/* ▼▼▼ 로고 이미지 적용 부분 ▼▼▼ */}
             <div className="w-8 h-8 rounded-lg overflow-hidden shadow-sm"> 
                 <img 
                    src="https://github.com/jiinuu/jiinuu.github.io/blob/6c703d1744c6cd2f18b9a09a75712ed60f23f53a/402337326_657879323001534_477076322436472498_n.jpg?raw=true" 
                    alt="모두의 문제연구소 로고" 
                    className="w-full h-full object-cover"
                 />
             </div>
             <div className="text-2xl font-black tracking-tighter text-[#2563EB]">모두의 문제연구소</div>
          </div>
          
          <p className="text-slate-500 max-w-xs text-sm leading-relaxed font-medium">
            <span className="block text-[#2563EB] font-bold mb-1">Mission: 사회를 이롭게</span>
            한양대학교 ERICA 수리데이터사이언스학과 소속 데이터 저널리즘 및 리서치 학회입니다.
          </p>
          <div className="flex space-x-4">
            <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-[#2563EB] hover:text-white transition-colors cursor-pointer text-xs font-bold">In</div>
            <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-[#2563EB] hover:text-white transition-colors cursor-pointer text-xs font-bold">Ig</div>
            <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-[#2563EB] hover:text-white transition-colors cursor-pointer text-xs font-bold">Et</div>
          </div>
        </div>
        
        {/* Menu Section 1 */}
        <div className="space-y-4">
          <h4 className="font-bold text-slate-900">활동</h4>
          <ul className="text-sm text-slate-600 space-y-2">
            <li><button onClick={() => onNavigate('home')} className="hover:text-[#2563EB] font-medium transition-colors text-left">데이터 저널리즘</button></li>
            <li><button onClick={() => onNavigate('home')} className="hover:text-[#2563EB] font-medium transition-colors text-left">엘리트 빌더</button></li>
            <li><button onClick={() => onNavigate('home')} className="hover:text-[#2563EB] font-medium transition-colors text-left">인사이트 리그</button></li>
          </ul>
        </div>

        {/* Menu Section 2 */}
        <div className="space-y-4">
          <h4 className="font-bold text-slate-900">학회</h4>
          <ul className="text-sm text-slate-600 space-y-2">
            <li><button onClick={() => onNavigate('home')} className="hover:text-[#2563EB] font-medium transition-colors text-left">연구소 소개</button></li>
            <li><button onClick={() => onNavigate('home')} className="hover:text-[#2563EB] font-medium transition-colors text-left">구성원</button></li>
            <li><button onClick={() => onNavigate('history')} className="hover:text-[#2563EB] font-medium transition-colors text-left">연혁</button></li>
          </ul>
        </div>

        {/* Menu Section 3 */}
        <div className="space-y-4">
          <h4 className="font-bold text-slate-900">지원</h4>
          <ul className="text-sm text-slate-600 space-y-2">
            <li><button className="hover:text-[#2563EB] font-medium transition-colors text-left">FAQ</button></li>
            <li><button className="hover:text-[#2563EB] font-medium transition-colors text-left">문의하기</button></li>
            <li><button className="hover:text-[#2563EB] font-medium transition-colors text-left">지원하기</button></li>
          </ul>
        </div>
      </div>
      
      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
        <p>© 2024 모두의 문제연구소. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-slate-900">이용약관</a>
          <a href="#" className="hover:text-slate-900">개인정보처리방침</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;