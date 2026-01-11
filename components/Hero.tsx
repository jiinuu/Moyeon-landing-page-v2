
import React from 'react';

interface HeroProps {
  onNavigate: (view: 'activity' | 'partnership') => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative py-24 px-6 overflow-hidden flex items-center min-h-[80vh]">
      
      {/* Background Logo Watermark (수정됨: 더 잘 보이도록 투명도 증가 및 블러 제거) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] opacity-[0.2] pointer-events-none select-none -z-10 flex items-center justify-center">
         <img 
           src="https://github.com/jiinuu/jiinuu.github.io/blob/6c703d1744c6cd2f18b9a09a75712ed60f23f53a/402337326_657879323001534_477076322436472498_n.jpg?raw=true" 
           alt="Background Watermark" 
           className="w-full h-full object-cover rounded-full mix-blend-multiply"
         />
      </div>

      {/* Subtle Blue Gradient Blob (Existing) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[100px] -z-20 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto w-full text-center space-y-10 relative z-10">
        
        {/* Brand Identity Group */}
        <div className="flex flex-col items-center gap-6 animate-fade-in-up">
            <div className="w-32 h-32 flex items-center justify-center mb-4 transform hover:rotate-3 transition-transform duration-500">
              <img 
                src="https://github.com/jiinuu/jiinuu.github.io/blob/6c703d1744c6cd2f18b9a09a75712ed60f23f53a/402337326_657879323001534_477076322436472498_n.jpg?raw=true" 
                alt="모두의 문제연구소 로고" 
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
            
            <div className="space-y-2">
               <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">모두의 문제연구소</h2>
               <div className="flex items-center justify-center gap-2 text-sm md:text-base text-slate-500 font-bold">
                  <span className="font-mono text-[#2563EB]"></span>
                  <span>한양대 ERICA 수리데이터사이언스학과 공식 학회</span>
               </div>
            </div>
        </div>

        {/* Main Slogan */}
        <div className="space-y-4 animate-fade-in-up delay-100">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.9]">
            WE PROVE<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-blue-400">THE WORLD</span><br/>
            WITH DATA
          </h1>
        </div>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
          세상의 문제를 데이터로 정의하고 해결책을 제안합니다.<br/>
          실무 역량을 키우고 사회적 가치를 창출하는<br/>
          <strong className="text-slate-900">데이터 저널리즘 & 리서치 학회</strong>입니다.
        </p>

        {/* Buttons & Instagram */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center items-center animate-fade-in-up delay-300">
          <button 
            onClick={() => onNavigate('activity')}
            className="group bg-[#2563EB] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#1d4ed8] transition-all hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 min-w-[200px]"
          >
            학회 활동 살펴보기
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
          
          <button 
            onClick={() => onNavigate('partnership')}
            className="bg-white text-slate-700 border border-slate-200 px-10 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all hover:border-blue-200 hover:text-[#2563EB] min-w-[160px]"
          >
            협업 문의
          </button>

          {/* Instagram Icon Button */}
          <a 
            href="https://www.instagram.com/moyeon_lab/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-slate-50 border border-slate-200 text-slate-500 hover:text-white hover:bg-gradient-to-tr hover:from-[#fd5949] hover:to-[#d6249f] hover:border-transparent transition-all shadow-sm hover:shadow-lg transform hover:scale-110 ml-0 sm:ml-2 group"
            aria-label="Instagram"
          >
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" className="group-hover:animate-pulse">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.232-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.232 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
             </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
