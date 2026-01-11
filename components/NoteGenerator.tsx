
import React, { useState } from 'react';
import { generatePaymentNote } from '../services/geminiService';
import { PaymentNote } from '../types';

const NoteGenerator: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [notes, setNotes] = useState<PaymentNote[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!topic) return;
    setLoading(true);
    const results = await generatePaymentNote(`Generate 3 creative research insight summary titles or hashtags for a data journalism project about: ${topic}. Focus on social impact and benefits.`);
    setNotes(results);
    setLoading(false);
  };

  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-block bg-blue-100 text-[#2563EB] px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase">
          AI Insight Assistant
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900">Get Inspired by Gemini</h2>
        <p className="text-xl text-slate-600">
          데이터 스토리의 완벽한 앵글을 찾고 계신가요? AI와 함께 사회를 이롭게 할 인사이트를 발견해보세요.
        </p>

        <div className="bg-white p-8 rounded-3xl shadow-xl space-y-6 max-w-2xl mx-auto border border-gray-100">
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="text" 
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="주제 (예: 기후 변화, 공공 데이터)"
              className="flex-1 px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-[#2563EB] outline-none text-lg transition-colors"
            />
            <button 
              onClick={handleGenerate}
              disabled={loading || !topic}
              className="bg-[#2563EB] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#1d4ed8] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-200"
            >
              {loading ? '분석 중...' : '인사이트 생성'}
            </button>
          </div>

          <div className="grid gap-3 pt-4">
            {notes.map((note, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-transparent hover:border-blue-200 transition-all cursor-pointer group"
                onClick={() => {
                   navigator.clipboard.writeText(`${note.text} ${note.emoji}`);
                   alert('인사이트가 복사되었습니다!');
                }}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">{note.emoji}</span>
                  <span className="font-medium text-slate-800 text-left">{note.text}</span>
                </div>
                <span className="text-xs font-bold text-[#2563EB] opacity-0 group-hover:opacity-100 uppercase tracking-wider">
                  Copy
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoteGenerator;
