
import React, { useState } from 'react';

const TopicSuggestion: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTopic = {
      id: Date.now(),
      topic,
      description,
      submittedAt: new Date().toLocaleString()
    };
    
    // Save to LocalStorage for Admin
    const existing = JSON.parse(localStorage.getItem('topic_suggestions') || '[]');
    localStorage.setItem('topic_suggestions', JSON.stringify([...existing, newTopic]));
    
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="min-h-screen bg-slate-50 py-24 px-6 flex items-center justify-center">
        <div className="max-w-lg w-full bg-white p-12 rounded-[2.5rem] shadow-xl border border-gray-100 text-center space-y-6">
           <div className="text-4xl mb-4">💡</div>
           <h2 className="text-3xl font-black text-slate-900">제안해 주셔서 감사합니다!</h2>
           <p className="text-slate-600 leading-relaxed">
             전달해주신 주제는 연구소 회의 안건으로 상정되어<br/>
             차기 프로젝트 주제 선정 시 소중하게 참고하겠습니다.
           </p>
           <button onClick={() => setSubmitted(false)} className="mt-8 bg-[#2563EB] text-white px-8 py-3 rounded-full font-bold shadow-lg">
             다른 아이디어 제안하기
           </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 py-24 px-6">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase">
            Topic Suggestion
          </div>
          <h2 className="text-4xl font-black text-slate-900">어떤 분석을 보고 싶으세요?</h2>
          <p className="text-slate-500">평소 궁금했던 사회 문제나 데이터 분석 주제가 있다면 알려주세요.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-1">주제 (키워드)</label>
            <input 
              type="text" 
              required 
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="예: 탕후루 가게 폐업률, 1인 가구 쓰레기 배출량 등"
              className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2563EB] outline-none transition-all font-bold text-lg"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-1">구체적인 설명 (선택)</label>
            <textarea 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              placeholder="왜 이 주제가 궁금한지, 어떤 데이터를 보면 좋을지 자유롭게 적어주세요."
              className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2563EB] outline-none transition-all resize-none"
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-[#2563EB] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#1d4ed8] transition-all shadow-xl shadow-blue-200 mt-4">
            제안 보내기
          </button>
        </form>
      </div>
    </section>
  );
};

export default TopicSuggestion;
