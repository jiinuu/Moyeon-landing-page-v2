
import React from 'react';

const Research: React.FC = () => {
  
  const experiments = [
    {
      id: 1,
      tool: "Tableau Public",
      title: "Seoul Metro Pulse",
      desc: "서울시 지하철 승하차 인원을 시간대별로 시각화하여, 도시의 숨결을 파동(Pulse) 형태로 표현한 대시보드입니다.",
      tags: ["Public Data", "Dashboard"],
      color: "bg-blue-50",
      textColor: "text-blue-600",
      img: "https://images.unsplash.com/photo-1576485375217-d6a95e34d043?auto=format&fit=crop&w=800&q=80" // Metro/Subway concept
    },
    {
      id: 2,
      tool: "D3.js / React",
      title: "Network of Influence",
      desc: "학술 논문 간의 인용 관계를 Force-directed Graph로 구현하여, 지식의 전파 과정을 인터랙티브하게 탐색합니다.",
      tags: ["Web Interactive", "Network Analysis"],
      color: "bg-purple-50",
      textColor: "text-purple-600",
      img: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&w=800&q=80" // Network nodes
    },
    {
      id: 3,
      tool: "Kepler.gl",
      title: "Delivery Route 3D",
      desc: "배달 라이더들의 이동 경로 데이터를 3D 지리 정보 시스템 위에 맵핑하여 도심 물류의 핫스팟을 발견합니다.",
      tags: ["GIS", "Spatial Data"],
      color: "bg-emerald-50",
      textColor: "text-emerald-600",
      img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80" // City Aerial
    },
    {
      id: 4,
      tool: "Python Plotly",
      title: "Stock Market Heatmap",
      desc: "KOSPI/KOSDAQ 전 종목의 등락률을 트리맵(Treemap)으로 실시간 시각화하여 시장의 흐름을 한눈에 파악합니다.",
      tags: ["Finance", "Real-time"],
      color: "bg-rose-50",
      textColor: "text-rose-600",
      img: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&w=800&q=80" // Stocks/Finance
    },
    {
      id: 5,
      tool: "R Shiny",
      title: "Climate Shift",
      desc: "지난 100년간의 한반도 기온 변화 데이터를 동적 차트로 구성하여 기후 위기의 심각성을 스토리텔링합니다.",
      tags: ["Environment", "Storytelling"],
      color: "bg-orange-50",
      textColor: "text-orange-600",
      img: "https://images.unsplash.com/photo-1569002331677-2c5e5387431e?auto=format&fit=crop&w=800&q=80" // Fire/Climate
    },
    {
      id: 6,
      tool: "Three.js",
      title: "Data Constellation",
      desc: "텍스트 마이닝된 키워드들을 3차원 우주 공간에 배치하여, 단어 간의 의미적 거리를 별자리처럼 탐험합니다.",
      tags: ["NLP", "3D WebGL"],
      color: "bg-slate-900",
      textColor: "text-blue-400",
      img: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&w=800&q=80" // Constellation/Space
    }
  ];

  return (
    <section className="bg-white min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto space-y-8 animate-fade-in-up">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-xs font-bold uppercase tracking-widest text-slate-500">
             <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse"></span>
             The Data Lab
           </div>
           <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-tight">
             Experiments with<br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-cyan-500">Living Data</span>
           </h1>
           <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
             우리는 단순한 차트를 넘어, 사용자가 직접 만지고 탐색할 수 있는<br className="hidden md:block"/>
             인터랙티브 데이터 경험(Experience)을 설계합니다.
           </p>
        </div>

        {/* Methodology Flow (Compact Version) */}
        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-100">
           <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-lg font-black text-slate-900 mb-2">01. Collection</h3>
                <p className="text-sm text-slate-500">API & Crawling</p>
              </div>
              <div className="hidden md:block border-t-2 border-dashed border-slate-200 relative top-3"></div>
              <div className="text-center md:text-left">
                <h3 className="text-lg font-black text-slate-900 mb-2">02. Analysis</h3>
                <p className="text-sm text-slate-500">Python & R Modeling</p>
              </div>
              <div className="hidden md:block border-t-2 border-dashed border-slate-200 relative top-3"></div>
              <div className="text-center md:text-left">
                <h3 className="text-lg font-black text-slate-900 mb-2">03. Visualization</h3>
                <p className="text-sm text-slate-500">Interactive Web</p>
              </div>
           </div>
        </div>

        {/* Experiments Grid (Google Labs Style) */}
        <div>
           <h2 className="text-3xl font-black text-slate-900 mb-10 px-2">Featured Experiments</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {experiments.map((exp) => (
                <div 
                  key={exp.id} 
                  className="group relative bg-white rounded-[2.5rem] border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-blue-200 transition-all duration-500 cursor-pointer flex flex-col h-full"
                >
                   {/* Card Image Area */}
                   <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-slate-200 animate-pulse"></div>
                      <img 
                        src={exp.img} 
                        alt={exp.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.squarespace-cdn.com/content/v1/64c4f5cffc1a5952f996c322/1690636156758-H252XJ1UKV8NJO54EZ8K/Jill+Hubley+-+NYC+Trees+-+jillhubley.com%2Fproject%2Fnyctrees";
                        }}
                      />
                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                         <span className="bg-white/20 backdrop-blur-md text-white border border-white/50 px-6 py-2 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                           Launch Experiment ↗
                         </span>
                      </div>
                      
                      {/* Tool Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wide bg-white/90 backdrop-blur shadow-sm ${exp.textColor}`}>
                          {exp.tool}
                        </span>
                      </div>
                   </div>

                   {/* Card Content Area */}
                   <div className="p-8 flex flex-col flex-1">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.tags.map((tag, i) => (
                          <span key={i} className="text-[10px] font-bold text-slate-400 uppercase tracking-wider border border-slate-100 px-2 py-1 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-[#2563EB] transition-colors leading-tight">
                        {exp.title}
                      </h3>
                      
                      <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                        {exp.desc}
                      </p>

                      <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-auto">
                         <span className="text-xs font-bold text-slate-400">Ver 1.0</span>
                         <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                         </div>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="bg-[#2563EB] rounded-[3rem] p-12 md:p-20 text-center text-white overflow-hidden relative">
           <div className="relative z-10 space-y-8">
             <h2 className="text-3xl md:text-5xl font-black tracking-tight">
               Have an interesting dataset?
             </h2>
             <p className="text-blue-100 text-lg max-w-2xl mx-auto">
               더 재미있는 시각화 아이디어가 있다면 언제든지 제안해주세요.<br/>
               여러분의 데이터가 새로운 예술 작품이 됩니다.
             </p>
             <button className="bg-white text-[#2563EB] px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
               실험 제안하기
             </button>
           </div>
           
           {/* Abstract Background Decoration */}
           <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white rounded-full blur-[120px]"></div>
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-300 rounded-full blur-[100px]"></div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Research;
