
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2 space-y-6">
          <div className="text-2xl font-black tracking-tighter text-[#008CFF]">모두의 문제연구소</div>
          <p className="text-slate-500 max-w-xs text-sm leading-relaxed">
            한양대학교 ERICA 수리데이터사이언스학과 소속 데이터 저널리즘 및 리서치 학회입니다.
          </p>
          <div className="flex space-x-4">
            <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-[#008CFF] hover:text-white transition-colors cursor-pointer text-xs font-bold">In</div>
            <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-[#008CFF] hover:text-white transition-colors cursor-pointer text-xs font-bold">Ig</div>
            <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-[#008CFF] hover:text-white transition-colors cursor-pointer text-xs font-bold">Et</div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-bold text-slate-900">활동</h4>
          <ul className="text-sm text-slate-600 space-y-2">
            <li><a href="#" className="hover:text-black font-medium">데이터 저널리즘</a></li>
            <li><a href="#" className="hover:text-black font-medium">엘리트 빌더</a></li>
            <li><a href="#" className="hover:text-black font-medium">인사이트 리그</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-slate-900">학회</h4>
          <ul className="text-sm text-slate-600 space-y-2">
            <li><a href="#" className="hover:text-black font-medium">연구소 소개</a></li>
            <li><a href="#" className="hover:text-black font-medium">구성원</a></li>
            <li><a href="#" className="hover:text-black font-medium">연혁</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-slate-900">지원</h4>
          <ul className="text-sm text-slate-600 space-y-2">
            <li><a href="#" className="hover:text-black font-medium">FAQ</a></li>
            <li><a href="#" className="hover:text-black font-medium">문의하기</a></li>
            <li><a href="#" className="hover:text-black font-medium">지원하기</a></li>
          </ul>
        </div>
      </div>
      
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
