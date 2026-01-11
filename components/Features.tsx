
import React from 'react';

const features = [
  {
    index: "01",
    tag: "Practical Experience",
    title: "강력한 실무 경험",
    subtitle: "교과서 밖의 진짜 데이터",
    desc: "정제된 예제 데이터가 아닙니다. 공공 데이터 포털, 소셜 미디어, 센서 데이터 등 '날 것(Raw)'의 데이터를 직접 수집하고 전처리하며 현업 수준의 데이터 핸들링 능력을 기릅니다.",
    outputs: ["Data Cleaning", "EDA", "Tableau/PowerBI"],
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&w=800&q=80"
  },
  {
    index: "02",
    tag: "Award & Career",
    title: "증명된 포트폴리오",
    subtitle: "공모전 수상 및 프로젝트",
    desc: "단순한 스터디를 넘어 결과물을 만들어냅니다. 주요 빅데이터 공모전 입상 및 학술 대회 발표를 목표로 팀 프로젝트를 진행하여 나만의 확실한 포트폴리오를 완성합니다.",
    outputs: ["장관상 수상 도전", "학술지 등재", "Github 관리"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
  },
  {
    index: "03",
    tag: "Social Impact",
    title: "사회적 가치 실현",
    subtitle: "정책 제안과 문제 해결",
    desc: "우리의 분석은 리포트에서 끝나지 않습니다. 지자체 및 시민 단체와 협력하여 실제 정책에 반영될 수 있도록 제안하며, 데이터가 가진 선한 영향력을 사회에 전파합니다.",
    outputs: ["정책 제안서", "사회 문제 해결", "Change Maker"],
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80"
  }
];

const Features: React.FC = () => {
  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
           <span className="inline-block px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-[#2563EB] text-xs font-bold tracking-widest uppercase mb-4">
             Why Join Us?
           </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 mb-6">
            성장, 증명, 그리고 기여
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            모두의 문제연구소는 데이터 분석 역량을 키우고 싶은 학생과<br className="hidden md:block"/> 
            데이터 기반의 솔루션을 필요로 하는 사회를 연결합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="group cursor-pointer flex flex-col h-full">
              <div className="aspect-[16/10] overflow-hidden rounded-3xl mb-8 bg-slate-100 shadow-lg border border-gray-100 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[#2563EB]/0 group-hover:bg-[#2563EB]/10 transition-colors duration-500 z-10" />
                <img 
                  src={f.image} 
                  alt={f.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm z-20">
                  {f.tag}
                </div>
              </div>
              
              <div className="flex-1 flex flex-col items-start px-2">
                 <div className="flex items-center space-x-2 mb-3">
                   <span className="text-xs font-mono font-bold text-[#2563EB]/50">[{f.index}]</span>
                 </div>
                 <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-[#2563EB] transition-colors">{f.title}</h3>
                 <p className="font-bold text-[#2563EB] mb-4 text-sm">{f.subtitle}</p>
                 <p className="text-slate-600 leading-relaxed text-sm mb-6 flex-1">{f.desc}</p>
                 
                 <div className="flex flex-wrap gap-2 mt-auto">
                    {f.outputs.map((out, idx) => (
                      <span key={idx} className="bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-md text-[10px] font-bold text-slate-500 uppercase tracking-tight group-hover:border-blue-200 group-hover:text-[#2563EB] transition-colors">
                        {out}
                      </span>
                    ))}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
