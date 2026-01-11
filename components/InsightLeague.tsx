
import React from 'react';

const InsightLeague: React.FC = () => {
  return (
    <section className="bg-slate-900 min-h-screen py-24 px-6 text-white overflow-hidden relative">
      
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[150px] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6 mb-24 animate-fade-in-up">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
             Season 3 is Coming Soon
           </div>
           <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
             INSIGHT<br/>LEAGUE
           </h1>
           <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
             치열한 경쟁 속에 피어나는 압도적인 성장.<br/>
             학회 내부 데이터 분석 해커톤, <strong>인사이트 리그</strong>입니다.
           </p>
        </div>

        {/* League Process */}
        <div className="grid md:grid-cols-4 gap-6 mb-32">
           {[
             { title: "Team Building", desc: "랜덤 팀 매칭을 통해 다양한 전공의 부원들과 협업합니다." },
             { title: "Topic Selection", desc: "주어진 대주제 내에서 가장 날카로운 문제 의식을 도출합니다." },
             { title: "Modeling & Viz", desc: "48시간의 집중 분석을 통해 최적의 모델과 시각화를 구현합니다." },
             { title: "Final Pitch", desc: "현직 데이터 사이언티스트 및 교수님 앞에서 결과를 발표합니다." }
           ].map((step, i) => (
             <div key={i} className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                <div className="text-blue-500 font-black text-2xl mb-4">0{i+1}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
             </div>
           ))}
        </div>

        {/* Hall of Fame */}
        <div className="mb-24">
          <h2 className="text-4xl font-black mb-12 text-center">Hall of Fame</h2>
          <div className="grid md:grid-cols-3 gap-8">
             {/* Winner 2 */}
             <div className="bg-gradient-to-b from-slate-800 to-slate-900 p-8 rounded-[2.5rem] border border-slate-700 text-center transform md:translate-y-8 opacity-80 hover:opacity-100 transition-all">
                <div className="text-4xl mb-4">🥈</div>
                <h3 className="text-2xl font-black mb-2">Team Alpha</h3>
                <p className="text-slate-400 text-sm mb-6">2nd Place, Season 2</p>
                <div className="text-xs text-slate-500 font-mono border-t border-slate-700 pt-4">
                   "서울시 심야버스 최적 노선 제안"
                </div>
             </div>

             {/* Winner 1 */}
             <div className="bg-gradient-to-b from-[#2563EB] to-blue-900 p-8 rounded-[2.5rem] border border-blue-500 text-center transform scale-105 shadow-2xl shadow-blue-900/50 relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full font-black text-xs uppercase tracking-widest shadow-lg">
                  Champion
                </div>
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-3xl font-black mb-2 text-white">Team Zero</h3>
                <p className="text-blue-200 text-sm mb-6">Winner, Season 2</p>
                <div className="text-xs text-blue-200 font-mono border-t border-blue-500/50 pt-4">
                   "프랜차이즈 카페 폐업률 예측 모델"
                </div>
             </div>

             {/* Winner 3 */}
             <div className="bg-gradient-to-b from-slate-800 to-slate-900 p-8 rounded-[2.5rem] border border-slate-700 text-center transform md:translate-y-12 opacity-80 hover:opacity-100 transition-all">
                <div className="text-4xl mb-4">🥉</div>
                <h3 className="text-2xl font-black mb-2">Team Pandas</h3>
                <p className="text-slate-400 text-sm mb-6">3rd Place, Season 2</p>
                <div className="text-xs text-slate-500 font-mono border-t border-slate-700 pt-4">
                   "대학생 소비 패턴 클러스터링"
                </div>
             </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center border-t border-slate-800 pt-20">
           <p className="text-slate-500 mb-6">다음 우승 트로피의 주인공은 당신입니다.</p>
           <button className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold hover:bg-slate-200 transition-colors">
             시즌 3 알림 신청하기
           </button>
        </div>

      </div>
    </section>
  );
};

export default InsightLeague;
