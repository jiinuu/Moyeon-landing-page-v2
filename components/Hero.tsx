
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 relative z-10">
          
          {/* Official Mark & Mission Tag */}
          <div className="flex flex-col items-start gap-4">
             {/* Large Official Mark Display */}
             <div className="flex items-center gap-3 p-2 bg-blue-50/50 rounded-2xl border border-blue-100/50 backdrop-blur-sm">
                <div className="w-12 h-12 bg-[#2563EB] rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                   <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="5" y="6" width="6" height="12" rx="2" fill="currentColor" fillOpacity="0.9" />
                      <rect x="13" y="6" width="6" height="12" rx="2" fill="currentColor" />
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="white" fillOpacity="0.3"/>
                   </svg>
                </div>
                <div className="pr-3">
                   <span className="block text-xs font-bold text-[#2563EB] uppercase tracking-widest">Official Mark</span>
                   <span className="block text-sm font-black text-slate-900">모두의 문제연구소</span>
                </div>
             </div>
             
             <div className="flex items-center gap-3">
               <span className="text-sm font-mono font-bold text-[#2563EB]/50">[01]</span>
               <span className="px-4 py-1.5 text-xs font-bold tracking-widest uppercase border border-blue-200 bg-white text-[#2563EB] rounded-full shadow-sm">
                 Mission: 사회를 이롭게
               </span>
             </div>
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.9] drop-shadow-sm">
            PROVING<br/>THE WORLD<br/>WITH DATA
          </h1>
          
          <div className="relative group text-left">
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#2563EB]/20 rounded-tl-lg" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#2563EB]/20 rounded-br-lg" />
            
            <div className="p-8 rounded-3xl bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.05)] ring-1 ring-black/[0.03]">
               <h3 className="text-2xl font-black text-slate-900 mb-6">데이터로 증명하는 세상의 진실</h3>
               <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-[200px]">
                      <div className="mb-3 w-8 h-8 bg-[#2563EB] text-white flex items-center justify-center text-[10px] font-bold rounded-full shadow-lg shadow-blue-200">RES</div>
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
            <button className="bg-[#2563EB] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#1d4ed8] transition-all transform hover:scale-105 shadow-xl shadow-blue-200/50">
              인사이트 탐색하기
            </button>
          </div>
        </div>
        
        <div className="relative hidden md:block">
          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px]"></div>
          
          <div className="animate-float relative mx-auto w-[340px] h-[680px] rounded-[3.5rem] border-[12px] border-slate-900 shadow-[0_50px_100px_rgba(0,0,0,0.3)] overflow-hidden bg-slate-800">
            {/* Switched to a highly reliable image for Data Dashboard */}
            <img 
              src="https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1000&auto=format&fit=crop" 
              alt="Data Insight Dashboard" 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=1000&auto=format&fit=crop";
              }}
            />
            {/* Interactive Screen Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-white/10 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-1 bg-white/20 blur-sm"></div>
            
            {/* Floating Mark Inside Phone */}
            <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
               <div className="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm opacity-50"></div>
               </div>
            </div>
          </div>
          
          {/* Active Status Badge */}
          <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-[2rem] shadow-2xl border border-gray-50 flex items-center space-x-4 animate-bounce-slow">
             <div className="w-12 h-12 bg-[#2563EB] rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-blue-200">
                ON
             </div>
             <div className="pr-4">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Research Status</p>
                <p className="text-sm font-black text-slate-900">사회를 이롭게</p>
             </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5%); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
