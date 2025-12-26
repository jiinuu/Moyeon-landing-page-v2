
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-16 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 relative z-10">
          <div className="flex items-center space-x-3">
             <span className="text-sm font-mono font-bold text-[#008CFF]/50">[01]</span>
             <span className="px-3 py-1 text-xs font-bold tracking-widest uppercase border border-blue-200 bg-blue-50 text-blue-600 rounded-full">Research Institute</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.9] drop-shadow-sm">
            PROVING<br/>THE WORLD<br/>WITH DATA
          </h1>
          
          <div className="relative group text-left">
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#008CFF]/20 rounded-tl-lg" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#008CFF]/20 rounded-br-lg" />
            
            <div className="p-8 rounded-3xl bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.05)] ring-1 ring-black/[0.03]">
               <h3 className="text-2xl font-black text-slate-900 mb-6">데이터로 증명하는 세상의 진실</h3>
               <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-[200px]">
                      <div className="mb-3 w-8 h-8 bg-[#008CFF] text-white flex items-center justify-center text-[10px] font-bold rounded-full shadow-lg shadow-blue-200">RES</div>
                      <div>
                          <p className="font-bold text-slate-900 mb-1">심도 있는 리서치</p>
                          <p className="text-sm text-slate-500 leading-snug">객관적인 근거를 바탕으로 사회적 현상을 정교하게 포착합니다.</p>
                      </div>
                  </div>
                  <div className="hidden md:block w-px h-20 bg-slate-200" />
                  <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-[200px]">
                      <div className="mb-3 w-8 h-8 bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold rounded-full shadow-lg">ANL</div>
                      <div>
                          <p className="font-bold text-slate-900 mb-1">데이터 정밀 분석</p>
                          <p className="text-sm text-slate-500 leading-snug">숫자 뒤에 숨겨진 의미를 찾아내고 논리적인 인사이트를 도출합니다.</p>
                      </div>
                  </div>
               </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-[#008CFF] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#0074d6] transition-all transform hover:scale-105 shadow-xl shadow-blue-100">
              인사이트 탐색하기
            </button>
          </div>
        </div>
        
        <div className="relative hidden md:block">
          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px]"></div>
          
          <div className="animate-float relative mx-auto w-[340px] h-[680px] rounded-[3.5rem] border-[12px] border-slate-900 shadow-[0_50px_100px_rgba(0,0,0,0.3)] overflow-hidden bg-slate-800">
            {/* 고해상도 고대비 데이터 대시보드 이미지로 교체 */}
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80" 
              alt="Data Insight Dashboard" 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&w=1000&q=80";
              }}
            />
            {/* Interactive Screen Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-white/10 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-1 bg-white/20 blur-sm"></div>
          </div>
          
          {/* Active Status Badge */}
          <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-[2rem] shadow-2xl border border-gray-50 flex items-center space-x-4 animate-bounce">
             <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-green-100">
                LIVE
             </div>
             <div className="pr-4">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Analysis Mode</p>
                <p className="text-sm font-black text-slate-900">Active Monitoring</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
