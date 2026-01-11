
import React from 'react';

const historyEvents = [
  { 
    date: '2023. 05', 
    title: '창립', 
    desc: '한양대 수리데이터사이언스학과 정혜영 교수님의 지도 아래 창립되었습니다.',
    icon: '🚀'
  },
  { 
    date: '2023. 05', 
    title: '학과별 MBTI 분포 설문조사', 
    desc: '학과별 MBTI 분포를 조사하기 위한 설문조사를 진행하였습니다.',
    icon: '📊'
  },
  { 
    date: '2023. 10', 
    title: '학술정보관 열람석 관련 분석', 
    desc: '학술정보관 열람석의 사용 현황 및 효율성에 대한 분석을 진행했습니다.',
    icon: '📚'
  },
  { 
    date: '2024. 05', 
    title: '1학기 데이터 분석 발표회', 
    desc: '1학기 동안 진행된 데이터 분석 프로젝트 발표회를 개최했습니다.',
    icon: '🎤'
  },
  { 
    date: '2024. 11', 
    title: '자체 데이터 분석대회 진행', 
    desc: '자체적으로 데이터 분석 대회를 개최하여, 학내 데이터 분석 역량을 강화했습니다.',
    icon: '🏆'
  },
];

const History: React.FC = () => {
  return (
    <section className="bg-slate-50 min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
           <span className="inline-block px-4 py-1.5 rounded-full border border-blue-200 bg-white text-[#2563EB] text-xs font-bold tracking-widest uppercase shadow-sm">
             Our Journey
           </span>
           <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
             연구소가 걸어온 길
           </h2>
           <p className="text-slate-500 text-lg max-w-2xl mx-auto">
             데이터로 세상을 증명하기 위해 우리가 쌓아온 노력과 성장의 기록입니다.
           </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 -translate-x-1/2"></div>

          <div className="space-y-12">
            {historyEvents.map((event, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-[#2563EB] flex items-center justify-center z-10 shadow-lg">
                  <span className="text-lg">{event.icon}</span>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-20 md:pl-0 md:px-12">
                   <div className={`bg-white p-8 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 hover:border-blue-200 transition-all group ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <div className={`flex flex-col ${idx % 2 === 0 ? 'items-start' : 'items-start md:items-end'}`}>
                        <span className="text-[#2563EB] font-black text-xl mb-2 tracking-tight">{event.date}</span>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#2563EB] transition-colors">{event.title}</h3>
                        <p className="text-slate-600 leading-relaxed font-medium text-sm">
                          {event.desc}
                        </p>
                      </div>
                   </div>
                </div>
                
                {/* Empty Space for the other side */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
          
          {/* Bottom Decoration */}
          <div className="relative z-10 flex justify-center mt-12">
             <div className="bg-[#2563EB] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-blue-200">
               To Be Continued...
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
