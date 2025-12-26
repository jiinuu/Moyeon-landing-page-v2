
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
    const results = await generatePaymentNote(`Generate 3 creative research insight summary titles or hashtags for a data journalism project about: ${topic}`);
    setNotes(results);
    setLoading(false);
  };

  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-block bg-blue-100 text-[#008CFF] px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase">
          AI Assistant
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900">Get Inspired by Gemini</h2>
        <p className="text-xl text-slate-600">
          Struggling to find the perfect angle for your data story? Let AI help you frame your research.
        </p>

        <div className="bg-white p-8 rounded-3xl shadow-xl space-y-6 max-w-2xl mx-auto border border-gray-100">
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="text" 
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Topic (e.g., Stock Market, Coffee Consumption)"
              className="flex-1 px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-[#008CFF] outline-none text-lg transition-colors"
            />
            <button 
              onClick={handleGenerate}
              disabled={loading || !topic}
              className="bg-[#008CFF] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#0074d6] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {loading ? 'Analyzing...' : 'Generate Angle'}
            </button>
          </div>

          <div className="grid gap-3 pt-4">
            {notes.map((note, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-transparent hover:border-blue-200 transition-all cursor-pointer group"
                onClick={() => {
                   navigator.clipboard.writeText(`${note.text} ${note.emoji}`);
                   alert('Insight angle copied!');
                }}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">{note.emoji}</span>
                  <span className="font-medium text-slate-800">{note.text}</span>
                </div>
                <span className="text-xs font-bold text-[#008CFF] opacity-0 group-hover:opacity-100 uppercase tracking-wider">
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
