
import React, { useRef, useState, useEffect, MouseEvent } from 'react';

// 프로젝트 데이터 구조 정의
interface Project {
  id: number;
  category: string;
  title: string;
  year: string;
  images: { 
    id: number; 
    alt: string; 
    desc: string; 
    imageUrl?: string; 
  }[];
}

interface ActivityDetailProps {
  onNavigate?: (view: any) => void;
}

const ActivityDetail: React.FC<ActivityDetailProps> = ({ onNavigate }) => {
  const projects: Project[] = [
    {
      id: 1,
      category: "경제 분야",
      title: "국민연금 올바르게 알기",
      year: "2024 Project",
      images: [
        { id: 1, alt: "표지", desc: "메인 표지", imageUrl: "https://github.com/jiinuu/jiinuu.github.io/blob/main/Screenshot%202026-01-11%20193621.png?raw=true" }, 
        { id: 2, alt: "목차", desc: "콘텐츠 목차", imageUrl: "https://github.com/jiinuu/jiinuu.github.io/blob/main/Screenshot%202026-01-11%20193637.png?raw=true" },
        { id: 3, alt: "본문 1", desc: "정의 및 도입 배경", imageUrl: "https://github.com/jiinuu/jiinuu.github.io/blob/main/Screenshot%202026-01-11%20193650.png?raw=true" },
        { id: 4, alt: "본문 2", desc: "기금 고갈 및 이슈", imageUrl: "https://github.com/jiinuu/jiinuu.github.io/blob/main/Screenshot%202026-01-11%20193725.png?raw=true" },
        { id: 5, alt: "본문 3", desc: "재정수지 및 적립금 추계", imageUrl: "https://github.com/jiinuu/jiinuu.github.io/blob/main/Screenshot%202026-01-11%20193739.png?raw=true" },
        { id: 6, alt: "결론", desc: "미래와 해결 방안", imageUrl: "https://github.com/jiinuu/jiinuu.github.io/blob/main/Screenshot%202026-01-11%20193801.png?raw=true" },
        { id: 7, alt: "결론", desc: "미래와 해결 방안", imageUrl: "https://github.com/jiinuu/jiinuu.github.io/blob/main/Screenshot%202026-01-11%20193819.png?raw=true" }
      ]
    },
    {
      id: 2,
      category: "경제 분야",
      title: "우유 가격의 변화 이유",
      year: "2024 Project",
      images: [
        { id: 1, alt: "표지", desc: "메인 표지", imageUrl: "https://github.com/jiinuu/jiinuu.github.io/blob/main/Screenshot%202026-01-11%20193856.png?raw=true" },
        { id: 2, alt: "목차", desc: "콘텐츠 목차", imageUrl: "https://github.com/jiinuu/jiinuu.github.io/blob/main/Screenshot%202026-01-11%20193909.png?raw=true" },
        { id: 3, alt: "본문 1", desc: "밀크 인플레이션이란", imageUrl: "https://github.com/jiinuu/jiinuu.github.io/blob/main/Screenshot%202026-01-11%20193921.png?raw=true" },
        { id: 4, alt: "본문 2", desc: "우유값은 어떻게 결정될까?", imageUrl: "https://github.com/jiinuu/jiinuu.github.io/blob/main/Screenshot%202026-01-11%20193931.png?raw=true" },
        { id: 5, alt: "본문 3", desc: "우유값은 어떻게 결정될까?", imageUrl: "https://github.com/jiinuu/jiinuu.github.io/blob/main/Screenshot%202026-01-11%20193944.png?raw=true" },
        { id: 6, alt: "본문 4", desc: "우유값은 어떻게 결정될까?", imageUrl: "https://github.com/jiinuu/jiinuu.github.io/blob/main/Screenshot%202026-01-11%20193954.png?raw=true" },
        { id: 7, alt: "본문 5", desc: "우유값은 어떻게 변하였을까?", imageUrl: "https://github.com/jiinuu/jiinuu.github.io/blob/main/Screenshot%202026-01-11%20193944.png?raw=true" },
        { id: 8, alt: "본문 6", desc: "우유값은 어떻게 변하였을까?", imageUrl: "https://github.com/jiinuu/jiinuu.github.io/blob/main/Screenshot%202026-01-11%20194007.png?raw=true" },
        { id: 9, alt: "본문 7", desc: "우유값의 주요 변화요인", imageUrl: "https://github.com/jiinuu/jiinuu.github.io/blob/main/Screenshot%202026-01-11%20194020.png?raw=true" }
      ]
    }
  ];

  return (
    <section className="bg-slate-50 min-h-screen py-24 px-0">
      <div className="max-w-7xl mx-auto space-y-32">
        
        {projects.map((project) => (
          <div key={project.id} className="space-y-10">
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

            {/* Hybrid Scroll: Auto-scrolls but allows Drag */}
            <HybridScrollRow project={project} />
          </div>
        ))}

        <div className="mt-20 text-center px-6">
          <p className="text-slate-400 text-sm mb-6">
            이 콘텐츠가 유익하셨나요? 연구소의 더 많은 활동을 기대해주세요.
          </p>
          <button 
            onClick={() => onNavigate && onNavigate('topic')}
            className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors shadow-lg"
          >
            다른 주제 제안하기
          </button>
        </div>
      </div>
    </section>
  );
};

// Hybrid Scroll Component
const HybridScrollRow: React.FC<{ project: Project }> = ({ project }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate images for infinite feel
  const cards = [...project.images, ...project.images, ...project.images];

  // Auto-scroll logic (JS based to allow drag interruption)
  useEffect(() => {
    let animationFrameId: number;

    const autoScroll = () => {
      if (!isHovered && !isDragging && scrollRef.current) {
        scrollRef.current.scrollLeft += 1; // Speed of auto-scroll
        
        // Reset if reached end (Infinite Loop Simulation)
        if (scrollRef.current.scrollLeft >= (scrollRef.current.scrollWidth - scrollRef.current.clientWidth)) {
           scrollRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isDragging]);

  const onMouseDown = (e: MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="relative w-full group" onMouseEnter={() => setIsHovered(true)}>
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none md:w-24"></div>
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none md:w-24"></div>

      <div 
        ref={scrollRef}
        className="flex gap-6 px-6 md:px-12 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing pb-8 select-none"
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        style={{ scrollBehavior: isDragging ? 'auto' : 'auto' }} // Disable smooth scroll during drag/auto for instant response
      >
        {cards.map((card, i) => (
          <div 
            key={`${project.id}-card-${i}`} 
            className="relative w-[300px] md:w-[450px] flex-shrink-0 bg-white rounded-[2rem] shadow-lg border border-gray-100 overflow-hidden group/card hover:shadow-2xl transition-all duration-300"
          >
            <div className="aspect-[4/3] w-full bg-slate-100 relative flex items-center justify-center overflow-hidden p-1">
              <img 
                src={card.imageUrl ? card.imageUrl : `https://placehold.co/800x600/2563eb/ffffff?text=${encodeURIComponent(project.title + ' ' + card.id)}`}
                alt={card.alt}
                className="w-full h-full object-contain transition-transform duration-700 group-hover/card:scale-[1.02]"
                draggable={false}
              />
            </div>
            <div className="p-5 flex items-center justify-between bg-white border-t border-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center font-bold text-xs">{card.id}</div>
                  <span className="font-bold text-slate-700 text-sm">{card.desc}</span>
                </div>
            </div>
          </div>
        ))}
        <div className="w-6 md:w-12 flex-shrink-0"></div>
      </div>
      
      <div className="text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
         <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Scroll or Drag to Pause</span>
      </div>
      <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; } .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
    </div>
  );
};

export default ActivityDetail;
