
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NoteGenerator from './components/NoteGenerator';
import Features from './components/Features';
import Footer from './components/Footer';
import History from './components/History';
import Apply from './components/Apply';
import Admin from './components/Admin';
import Partnership from './components/Partnership';
import ActivityDetail from './components/ActivityDetail';
import Research from './components/Research';
import TopicSuggestion from './components/TopicSuggestion';
import FAQ from './components/FAQ';
import Members from './components/Members';
import EliteBuilder from './components/EliteBuilder';
import InsightLeague from './components/InsightLeague';

// ViewState 타입 확장
type ViewState = 'home' | 'history' | 'apply' | 'admin' | 'partnership' | 'activity' | 'research' | 'topic' | 'faq' | 'members' | 'elite-builder' | 'insight-league';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  // Analytics Tracker: Page Views
  useEffect(() => {
    // 1. Total Visitors tracking
    const currentTotal = parseInt(localStorage.getItem('analytics_visitors') || '0');
    localStorage.setItem('analytics_visitors', (currentTotal + 1).toString());

    // 2. Page Specific tracking
    const pageStats = JSON.parse(localStorage.getItem('analytics_page_views') || '{}');
    pageStats[currentView] = (pageStats[currentView] || 0) + 1;
    localStorage.setItem('analytics_page_views', JSON.stringify(pageStats));

  }, [currentView]);

  const navigateTo = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  // Keyboard shortcut for Admin access
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl + Shift + A to toggle Admin
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && (e.key === 'a' || e.key === 'A')) {
        e.preventDefault();
        setCurrentView(prev => prev === 'admin' ? 'home' : 'admin');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Marquee Data
  const marqueeData = [
    { target: "안산시 정책 기획자", message: "연구소의 버스 노선 데이터 분석 덕분에 배차 간격 불균형 문제를 해결했습니다.", tag: "#교통데이터_최적화" },
    { target: "23학번 신입 부원", message: "수업만으로는 배울 수 없었던 실제 데이터 전처리 경험과 공모전 수상까지 얻어갑니다.", tag: "#실무역량_강화" },
    { target: "데이터 저널리스트", message: "막연했던 사회 이슈를 객관적인 지표로 시각화하여 설득력 있는 기사를 쓸 수 있었습니다.", tag: "#팩트체크_저널리즘" },
    { target: "교내 시설팀", message: "학술정보관 열람석 점유율 분석 리포트를 통해 시험기간 좌석 운영 효율을 높였습니다.", tag: "#캠퍼스_데이터분석" },
    { target: "사회적 기업 CEO", message: "우리의 직감이 아닌, 데이터가 보여주는 진짜 소외 계층을 찾을 수 있었습니다.", tag: "#공익데이터_활용" }
  ];
  const infiniteMarqueeItems = [...marqueeData, ...marqueeData];

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-[#2563EB]">
      {currentView !== 'admin' && <Navbar onNavigate={navigateTo} />}
      
      <main>
        {currentView === 'home' && (
          <>
            <Hero onNavigate={navigateTo} />
            
            {/* Achievements Marquee */}
            <section className="bg-slate-50 py-12 overflow-hidden border-y border-gray-100">
               <div className="max-w-7xl mx-auto px-6">
                 <div className="flex space-x-8 animate-marquee whitespace-nowrap">
                   {infiniteMarqueeItems.map((item, i) => (
                     <div key={i} className="flex items-start space-x-4 bg-white px-6 py-5 rounded-2xl shadow-sm border border-gray-100 min-w-[340px] max-w-[340px]">
                       <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 text-lg">
                          {['🏛️', '🎓', '📰', '🏫', '🤝'][i % 5]}
                       </div>
                       <div className="flex flex-col whitespace-normal">
                         <p className="text-sm font-bold text-[#2563EB] mb-0.5">{item.target}</p>
                         <p className="text-xs text-slate-700 font-medium leading-relaxed mb-2">"{item.message}"</p>
                         <p className="text-[10px] font-bold text-slate-400 bg-slate-50 inline-block px-2 py-1 rounded-md self-start border border-slate-100">{item.tag}</p>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
            </section>

            <Features />
            <NoteGenerator />

            {/* Vision Section */}
            <section className="bg-white py-24 px-6 border-t border-slate-50">
              <div className="max-w-5xl mx-auto space-y-16 text-center">
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-3">
                      <span className="text-sm font-mono font-bold text-[#2563EB]/50">[05]</span>
                      <span className="px-3 py-1 text-xs font-bold tracking-widest uppercase border border-indigo-200 bg-indigo-50 text-[#2563EB] rounded-full">Our Philosophy</span>
                  </div>
                  <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-900 leading-tight">
                    데이터로<br/><span className="text-[#2563EB]">"진짜" 변화</span>를 만듭니다
                  </h2>
                  <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                    우리는 단순히 코딩을 하고 통계를 돌리는 것에 그치지 않습니다.<br className="hidden md:block"/>
                    데이터 뒤에 숨겨진 '사람'의 이야기를 발굴하고, 실질적인 문제 해결책을 제안합니다.
                  </p>
                </div>
                {/* Vision Cards */}
                <div className="grid md:grid-cols-2 gap-8 text-left">
                    <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                        <h3 className="text-2xl font-black text-slate-900 mb-4">Students</h3>
                        <p className="font-bold text-[#2563EB] mb-4 text-sm uppercase tracking-wide">성장의 기회</p>
                        <ul className="space-y-3 text-slate-600 font-medium text-sm">
                            <li className="flex items-start gap-2"><span className="text-blue-500">✓</span> 교과서 밖의 실제 '지저분한(Raw)' 데이터 핸들링 경험</li>
                            <li className="flex items-start gap-2"><span className="text-blue-500">✓</span> 팀 프로젝트를 통한 협업 및 커뮤니케이션 능력 배양</li>
                            <li className="flex items-start gap-2"><span className="text-blue-500">✓</span> 주요 데이터 분석 공모전 및 해커톤 수상 포트폴리오</li>
                        </ul>
                    </div>
                    <div className="p-10 rounded-[2.5rem] bg-slate-900 border border-slate-800 text-white">
                        <h3 className="text-2xl font-black text-white mb-4">Partners</h3>
                        <p className="font-bold text-blue-400 mb-4 text-sm uppercase tracking-wide">협업의 가치</p>
                        <ul className="space-y-3 text-slate-300 font-medium text-sm">
                            <li className="flex items-start gap-2"><span className="text-blue-400">✓</span> 정책 수립을 위한 객관적인 데이터 근거 마련</li>
                            <li className="flex items-start gap-2"><span className="text-blue-400">✓</span> 사회 문제 해결을 위한 참신한 대학생들의 시각과 아이디어</li>
                            <li className="flex items-start gap-2"><span className="text-blue-400">✓</span> 데이터 기반의 의사결정 프로세스 지원</li>
                        </ul>
                    </div>
                </div>
              </div>
            </section>

            {/* Final CTA */}
            <section className="bg-[#2563EB] py-32 px-6 text-white text-center">
              <div className="max-w-4xl mx-auto space-y-12">
                <div className="space-y-6">
                    <p className="text-xs font-black tracking-[0.5em] opacity-80 uppercase">Let's make an impact</p>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">세상을 바꾸는 여정에<br/>함께 하시겠습니까?</h2>
                    <p className="text-lg md:text-xl text-blue-100 leading-relaxed font-medium pt-4">
                      숫자로 진실을 증명하고 싶은 학생 연구원,<br className="hidden md:block"/>
                      그리고 더 나은 사회를 꿈꾸는 정책가와 활동가 모두를 환영합니다.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <button onClick={() => navigateTo('apply')} className="w-full sm:w-auto bg-white text-[#2563EB] px-10 py-5 rounded-full text-xl font-bold hover:bg-blue-50 transition-all shadow-2xl transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                      <span>학생 연구원 지원하기</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                    <button onClick={() => navigateTo('partnership')} className="w-full sm:w-auto bg-[#1d4ed8] text-white border border-white/20 px-10 py-5 rounded-full text-xl font-bold hover:bg-[#1e40af] transition-all flex items-center justify-center gap-2">
                      <span>협업 제안하기</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                    </button>
                </div>
              </div>
            </section>
          </>
        )}
        
        {currentView === 'history' && <History />}
        {currentView === 'apply' && <Apply />}
        {currentView === 'partnership' && <Partnership />}
        {currentView === 'activity' && <ActivityDetail onNavigate={navigateTo} />}
        {currentView === 'research' && <Research />}
        {currentView === 'topic' && <TopicSuggestion />}
        {currentView === 'faq' && <FAQ />}
        {currentView === 'members' && <Members onNavigate={navigateTo} />}
        {currentView === 'admin' && <Admin />}
        {currentView === 'elite-builder' && <EliteBuilder onNavigate={navigateTo} />}
        {currentView === 'insight-league' && <InsightLeague />}
      </main>
      
      {currentView !== 'admin' && <Footer onNavigate={navigateTo} />}

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee 50s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </div>
  );
};

export default App;
