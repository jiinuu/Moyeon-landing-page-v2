
import React from 'react';

// 프로젝트 데이터 구조 정의
interface Project {
  id: number;
  category: string;
  title: string;
  year: string;
  images: { id: number; alt: string; desc: string }[];
}

const ActivityDetail: React.FC = () => {
  // 여기에 새로운 프로젝트를 계속 추가할 수 있습니다.
  const projects: Project[] = [
    {
      id: 1,
      category: "경제 분야",
      title: "국민연금 올바르게 알기",
      year: "2024 Project",
      images: [
        { id: 1, alt: "표지", desc: "메인 표지" },
        { id: 2, alt: "목차", desc: "콘텐츠 목차" },
        { id: 3, alt: "본문 1", desc: "정의 및 도입 배경" },
        { id: 4, alt: "본문 2", desc: "기금 고갈 및 이슈" },
        { id: 5, alt: "본문 3", desc: "재정수지 및 적립금 추계" },
        { id: 6, alt: "결론", desc: "미래와 해결 방안" },
      ]
    },
    {
      id: 2,
      category: "교내 데이터 분석",
      title: "학술정보관 이용 패턴 분석",
      year: "2023 Fall",
      images: [
        { id: 1, alt: "분석 개요", desc: "프로젝트 목적" },
        { id: 2, alt: "데이터 수집", desc: "입출입 로그 데이터" },
        { id: 3, alt: "EDA", desc: "시간대별 이용 추이" },
        { id: 4, alt: "인사이트", desc: "시험기간 혼잡도 예측" },
        { id: 5, alt: "제안", desc: "좌석 배정 시스템 개선안" },
      ]
    }
  ];

  return (
    <section className="bg-slate-50 min-h-screen py-24 px-0 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-32">
        
        {projects.map((project, idx) => (
          <div key={project.id} className="space-y-10">
             {/* Header Section for each project */}
             <div className="px-6 md:px-12 max-w-4xl mx-auto text-center space-y-4 animate-fade-in-up">
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm mb-4">
                 <span className="w-2 h-2 rounded-full bg-[#2563EB]"></span>
                 <span className="text-[#2563EB] text-xs font-bold tracking-widest uppercase">{project.year}</span>
               </div>
               <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                 {project.title}
               </h2>
               <p className="text-slate-500 text-lg font-medium">
                 {project.category}
               </p>
            </div>

            {/* Auto-scrolling Image Marquee */}
            <div className="relative w-full overflow-hidden group">
              {/* Left/Right Fade Gradient Overlay for aesthetic */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

              {/* Marquee Track - Duplicated for infinite loop */}
              <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 px-6">
                {[...project.images, ...project.images, ...project.images].map((card, i) => (
                  <div 
                    key={`${project.id}-card-${i}`} 
                    className="relative w-[300px] md:w-[400px] flex-shrink-0 bg-white rounded-[2rem] shadow-lg border border-gray-100 overflow-hidden group/card hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="aspect-[4/3] w-full bg-slate-100 relative flex items-center justify-center overflow-hidden">
                      {/* 
                         [개발자 노트] 
                         실제 이미지 사용 시 src를 업데이트 하세요.
                         예: src={`/images/project${project.id}/${card.id}.jpg`}
                      */}
                      <img 
                        src={`https://placehold.co/800x600/2563eb/ffffff?text=${encodeURIComponent(project.title + ' ' + card.id)}`}
                        alt={card.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                      />
                    </div>
                    
                    <div className="p-5 flex items-center justify-between bg-white">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center font-bold text-xs">
                            {card.id}
                          </div>
                          <span className="font-bold text-slate-700 text-sm">{card.desc}</span>
                        </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Bottom Action */}
        <div className="mt-20 text-center px-6">
          <p className="text-slate-400 text-sm mb-6">
            이 콘텐츠가 유익하셨나요? 연구소의 더 많은 활동을 기대해주세요.
          </p>
          <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors shadow-lg">
            다른 주제 제안하기
          </button>
        </div>
      </div>

      <style>{`
        /* Custom animation speed adjustment if needed */
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ActivityDetail;
