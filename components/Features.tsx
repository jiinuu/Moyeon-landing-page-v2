
import React from 'react';

const features = [
  {
    index: "02",
    tag: "Activity 01",
    title: "TRACK: DATA JOURNALISM",
    subtitle: "익숙한 이슈를 낯설게 분석하다",
    desc: "경제, 엔터, IT, 생명 과학까지. 일상적인 데이터를 데이터 저널리즘의 시각으로 재해석하여 독창적인 인사이트를 도출합니다.",
    outputs: ["인사이트 카드뉴스", "자체 SNS & 에브리타임"],
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80"
  },
  {
    index: "03",
    tag: "Activity 02",
    title: "ELITE BUILDERS",
    subtitle: "실전으로 증명하는 데이터 파워",
    desc: "NABIS, 소방안전 빅데이터 대회 등 국내 주요 공모전 석권 목표와 데이터 시각화, ML 모델링, 도메인 분석 스터디를 운영합니다.",
    outputs: ["공모전 챌린지", "인텐시브 스터디"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
  },
  {
    index: "04",
    tag: "Activity 03",
    title: "INSIGHT LEAGUE",
    subtitle: "학회 자체 데이터 경연",
    desc: "정해진 주제에 대해 각자의 분석 방법론을 카드뉴스로 구현하여 경쟁하는 연구소만의 특별한 리그입니다.",
    outputs: ["STATUS: ACTIVE", "Preparing New Season"],
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&w=800&q=80"
  }
];

const Features: React.FC = () => {
  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 mb-6">Proving with Action</h2>
          <p className="text-lg text-slate-600">모두의 문제연구소는 데이터 저널리즘과 실전 프로젝트를 통해 사회적 가치를 증명합니다.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden rounded-[2rem] mb-6 bg-slate-100 shadow-xl border border-gray-100 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[#2563EB]/0 group-hover:bg-[#2563EB]/10 transition-colors duration-500 z-10" />
                <img 
                  src={f.image} 
                  alt={f.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&w=800&q=80`;
                  }}
                />
              </div>
              <div className="flex items-center space-x-2 mb-3">
                 <span className="text-[10px] font-mono font-bold text-[#2563EB]/50">[{f.index}]</span>
                 <span className="px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase border border-slate-200 bg-slate-50 text-slate-600 rounded-full">{f.tag}</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-[#2563EB] transition-colors">{f.title}</h3>
              <p className="font-bold text-[#2563EB] mb-3 text-sm">{f.subtitle}</p>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">{f.desc}</p>
              <div className="flex flex-wrap gap-2">
                 {f.outputs.map((out, idx) => (
                   <span key={idx} className="bg-slate-50 border border-slate-100 px-3 py-1 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tighter group-hover:border-blue-200 transition-colors">{out}</span>
                 ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
