
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NoteGenerator from './components/NoteGenerator';
import Features from './components/Features';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-[#008CFF]">
      <Navbar />
      <main>
        <Hero />
        
        {/* Activity Simulation Section */}
        <section className="bg-slate-50 py-12 overflow-hidden border-y border-gray-100">
           <div className="max-w-7xl mx-auto px-6">
             <div className="flex space-x-12 animate-marquee whitespace-nowrap">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center space-x-4 bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100">
                    <img src={`https://picsum.photos/40/40?random=${i + 30}`} className="w-10 h-10 rounded-full border-2 border-slate-50" alt="User" />
                    <div>
                      <p className="text-sm font-bold text-slate-900">연구원 {i+1}님이 데이터를 증명했습니다</p>
                      <p className="text-xs text-slate-500">#{['사회현상', '경제분석', 'IT인사이트', '바이오데이터', '빅데이터'][i]}</p>
                    </div>
                  </div>
                ))}
             </div>
           </div>
        </section>

        <Features />

        <NoteGenerator />

        {/* Section 05: Vision - COLD DATA HOT HEART */}
        <section className="bg-white py-24 px-6 border-t border-slate-50">
          <div className="max-w-4xl mx-auto space-y-16 text-center">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3">
                 <span className="text-sm font-mono font-bold text-[#008CFF]/50">[05]</span>
                 <span className="px-3 py-1 text-xs font-bold tracking-widest uppercase border border-indigo-200 bg-indigo-50 text-indigo-600 rounded-full">Our Spirit</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.9]">COLD DATA<br/>HOT HEART</h2>
            </div>

            <div className="relative group p-10 md:p-16 rounded-[3rem] bg-slate-50 border border-slate-100 shadow-sm space-y-10">
              <div className="absolute top-8 left-8 w-12 h-12 border-t-4 border-l-4 border-slate-200 rounded-tl-2xl" />
              <div className="absolute bottom-8 right-8 w-12 h-12 border-b-4 border-r-4 border-slate-200 rounded-br-2xl" />

              <h3 className="text-2xl font-black text-slate-900">데이터 이상의 가치를 향하여</h3>
              <div className="flex flex-col md:flex-row gap-12 justify-center items-start">
                  <div className="flex flex-col items-center text-center max-w-[220px] w-full">
                      <div className="mb-4 w-14 h-14 bg-indigo-600 text-white flex items-center justify-center text-xs font-bold rounded-full shadow-lg shadow-indigo-100">SOC</div>
                      <div>
                          <p className="font-bold text-slate-900 mb-2">사회적 책임감</p>
                          <p className="text-sm text-slate-500 leading-relaxed">우리는 더 나은 사회를 만들기 위해 끊임없이 질문을 던집니다.</p>
                      </div>
                  </div>
                  <div className="hidden md:block w-px h-24 bg-slate-200 self-center" />
                  <div className="flex flex-col items-center text-center max-w-[220px] w-full">
                      <div className="mb-4 w-14 h-14 bg-slate-400 text-white flex items-center justify-center text-xs font-bold rounded-full shadow-lg">HYU</div>
                      <div>
                          <p className="font-bold text-slate-900 mb-2">한양의 이름으로</p>
                          <p className="text-sm text-slate-500 leading-relaxed">한양대학교 ERICA 수리데이터사이언스학과의 자부심을 이어갑니다.</p>
                      </div>
                  </div>
              </div>
              <div className="pt-8 border-t border-slate-200 text-center w-full">
                  <h4 className="text-xl font-black tracking-widest text-[#008CFF] mb-1 uppercase">모두의 문제연구소</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em]">Hanyang University ERICA</p>
              </div>
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="bg-[#008CFF] py-32 px-6 text-white text-center">
          <div className="max-w-3xl mx-auto space-y-10">
            <p className="text-xs font-black tracking-[0.5em] opacity-80 uppercase">Join the movement</p>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter">데이터로 세상을 바꾸는 여정</h2>
            <p className="text-xl text-blue-50 opacity-90 leading-relaxed max-w-2xl mx-auto font-medium">
              모두의 문제연구소는 세상의 진실을 숫자로 증명할 다음 세대의 데이터 빌더를 기다리고 있습니다.
            </p>
            <button className="bg-white text-[#008CFF] px-12 py-5 rounded-full text-xl font-bold hover:bg-blue-50 transition-all shadow-2xl transform hover:scale-105 active:scale-95">
              지금 지원하기
            </button>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default App;
