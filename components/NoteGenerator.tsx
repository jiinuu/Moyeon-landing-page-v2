
import React, { useState } from 'react';
import { generatePaymentNote, ProjectIdea } from '../services/geminiService';

const NoteGenerator: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [ideas, setIdeas] = useState<ProjectIdea[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!topic) return;
    setLoading(true);
    
    // 실제 Gemini API 호출
    const results = await generatePaymentNote(topic);
    
    setIdeas(results);
    setLoading(false);
  };

  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-block bg-blue-100 text-[#2563EB] px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase">
          AI Project Brainstorming
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900">
          어떤 문제를 해결하고 싶나요?
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          관심 있는 사회 이슈나 키워드를 입력해보세요.<br/>
          AI가 데이터로 풀어낼 수 있는 흥미로운 프로젝트 주제를 제안해드립니다.
        </p>

        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6 max-w-2xl mx-auto border border-gray-100">
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="text" 
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="키워드 입력 (예: 대중교통, 환경오염, 저출산)"
              className="flex-1 px-8 py-5 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-[#2563EB] focus:bg-white outline-none text-lg transition-all font-medium placeholder:text-slate-400"
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
            />
            <button 
              onClick={handleGenerate}
              disabled={loading || !topic}
              className="bg-[#2563EB] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#1d4ed8] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-200 whitespace-nowrap min-w-[140px] flex items-center justify-center"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  생성 중
                </span>
              ) : '아이디어 찾기'}
            </button>
          </div>

          <div className="space-y-3 pt-2 text-left">
            {ideas.length > 0 && <p className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2 mb-2">Gemini's Suggestions</p>}
            {ideas.map((idea, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 hover:-translate-y-1 transition-all cursor-default group"
              >
                <div className="flex items-center space-x-4 w-full">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-2xl shrink-0">
                    {idea.emoji}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-800 text-lg leading-tight mb-1">{idea.title}</h3>
                    <p className="text-sm text-slate-500 font-medium">{idea.desc}</p>
                  </div>
                </div>
              </div>
            ))}
            {ideas.length === 0 && !loading && (
               <div className="py-8 text-center text-slate-400 text-sm font-medium bg-slate-50/50 rounded-2xl border border-dashed border-slate-200">
                 👆 위 상자에 관심사(예: '치킨집 폐업률')를 입력하면<br/> Gemini가 프로젝트 주제를 추천해줍니다.
               </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoteGenerator;
