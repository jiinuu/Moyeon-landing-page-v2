
import React, { useState } from 'react';

const faqs = [
  { q: "비전공자도 지원할 수 있나요?", a: "네, 가능합니다. 기초적인 통계 지식과 파이썬 활용 능력만 있다면 전공과 무관하게 지원 가능합니다. 신입 교육 커리큘럼을 통해 부족한 부분을 채울 수 있습니다." },
  { q: "활동 기간은 어떻게 되나요?", a: "기본 활동 기간은 1년(2학기)입니다. 방학 중에는 집중 프로젝트나 공모전 준비가 진행될 수 있습니다." },
  { q: "학회비가 있나요?", a: "네, 학회 운영 및 서버 유지, 간식비 등으로 사용되는 소정의 회비가 있습니다. 매 학기 초 총회에서 투명하게 공개됩니다." },
  { q: "정기 모임 시간은 언제인가요?", a: "매주 목요일 오후 6시부터 8시까지 정기 세션을 진행합니다. 시험 기간 2주는 활동을 쉽니다." }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-slate-50 min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#2563EB] font-bold tracking-widest uppercase text-xs">Help Center</span>
          <h2 className="text-4xl font-black text-slate-900 mt-2">자주 묻는 질문</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-bold text-slate-900 text-lg">Q. {faq.q}</span>
                <span className={`text-[#2563EB] text-2xl font-bold transition-transform ${openIndex === i ? 'rotate-180' : ''}`}>∨</span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-gray-50 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
