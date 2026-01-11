
import React from 'react';

const EliteBuilder: React.FC<{ onNavigate?: (view: any) => void }> = ({ onNavigate }) => {
  return (
    <section className="bg-white min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-8 mb-24 animate-fade-in-up">
           <span className="text-[#2563EB] font-bold tracking-widest uppercase text-xs">Education Program</span>
           <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-tight">
             Elite Builder
           </h1>
           <p className="text-xl text-slate-600 leading-relaxed">
             신입 부원을 최고의 데이터 분석가로 성장시키는<br/>
             모두의 문제연구소만의 독보적인 육성 시스템입니다.
           </p>
        </div>

        {/* 3-Step Process */}
        <div className="grid md:grid-cols-3 gap-12 mb-32">
           <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 relative overflow-hidden group hover:border-blue-200 transition-colors">
              <div className="absolute top-0 right-0 p-8 text-9xl font-black text-slate-200 opacity-20 -rotate-12 select-none group-hover:text-blue-100 transition-colors">1</div>
              <div className="relative z-10 space-y-6">
                 <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl">🌱</div>
                 <h3 className="text-2xl font-black text-slate-900">Basic Training</h3>
                 <p className="text-slate-600 leading-relaxed font-medium">
                   비전공자도 따라올 수 있는 파이썬 기초부터 판다스(Pandas)를 활용한 데이터 전처리 실습을 진행합니다.
                 </p>
                 <ul className="space-y-2 text-sm text-slate-500 font-bold">
                   <li className="flex items-center gap-2">✓ Python 기초 문법</li>
                   <li className="flex items-center gap-2">✓ Pandas & Numpy</li>
                   <li className="flex items-center gap-2">✓ 웹 크롤링 실습</li>
                 </ul>
              </div>
           </div>
           
           <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] border border-slate-800 relative overflow-hidden group shadow-2xl transform md:-translate-y-4">
              <div className="absolute top-0 right-0 p-8 text-9xl font-black text-slate-800 opacity-30 -rotate-12 select-none">2</div>
              <div className="relative z-10 space-y-6">
                 <div className="w-16 h-16 bg-blue-600 rounded-2xl shadow-lg shadow-blue-900/50 flex items-center justify-center text-3xl">🚀</div>
                 <h3 className="text-2xl font-black text-white">Project Dive</h3>
                 <p className="text-slate-300 leading-relaxed font-medium">
                   실제 데이터를 다루며 가설을 설정하고 검증하는 미니 프로젝트를 수행합니다. 멘토의 밀착 피드백이 제공됩니다.
                 </p>
                 <ul className="space-y-2 text-sm text-blue-200 font-bold">
                   <li className="flex items-center gap-2">✓ 탐색적 데이터 분석(EDA)</li>
                   <li className="flex items-center gap-2">✓ 시각화 (Matplotlib/Seaborn)</li>
                   <li className="flex items-center gap-2">✓ 팀 협업 툴 (Git/Notion)</li>
                 </ul>
              </div>
           </div>

           <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 relative overflow-hidden group hover:border-blue-200 transition-colors">
              <div className="absolute top-0 right-0 p-8 text-9xl font-black text-slate-200 opacity-20 -rotate-12 select-none group-hover:text-blue-100 transition-colors">3</div>
              <div className="relative z-10 space-y-6">
                 <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl">🏆</div>
                 <h3 className="text-2xl font-black text-slate-900">Advanced League</h3>
                 <p className="text-slate-600 leading-relaxed font-medium">
                   머신러닝/딥러닝 모델링을 적용하여 복잡한 사회 문제를 해결하고, 외부 공모전에 출전하여 성과를 증명합니다.
                 </p>
                 <ul className="space-y-2 text-sm text-slate-500 font-bold">
                   <li className="flex items-center gap-2">✓ Scikit-learn 모델링</li>
                   <li className="flex items-center gap-2">✓ 공모전 입상 전략</li>
                   <li className="flex items-center gap-2">✓ 포트폴리오 완성</li>
                 </ul>
              </div>
           </div>
        </div>

        {/* Tech Stack Marquee */}
        <div className="mb-32">
           <h3 className="text-center text-slate-400 font-bold uppercase tracking-widest text-sm mb-10">Tools You Will Master</h3>
           <div className="flex justify-center gap-4 flex-wrap max-w-4xl mx-auto">
             {['Python', 'Pandas', 'Tableau', 'Scikit-Learn', 'Git', 'Slack', 'Notion', 'Google Cloud'].map((tech) => (
                <span key={tech} className="px-6 py-3 rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-600 text-sm hover:bg-white hover:border-blue-200 hover:text-blue-600 transition-all cursor-default">
                  {tech}
                </span>
             ))}
           </div>
        </div>

        {/* Call to Action */}
        <div className="bg-[#2563EB] rounded-[3rem] p-12 md:p-20 text-center text-white">
           <h2 className="text-3xl md:text-5xl font-black mb-8">Ready to Level Up?</h2>
           <p className="text-blue-100 text-lg mb-10">성장의 기회는 준비된 자에게 옵니다. 지금 바로 지원하세요.</p>
           <button 
             onClick={() => onNavigate && onNavigate('apply')}
             className="bg-white text-[#2563EB] px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl"
           >
             엘리트 빌더 합류하기
           </button>
        </div>

      </div>
    </section>
  );
};

export default EliteBuilder;
