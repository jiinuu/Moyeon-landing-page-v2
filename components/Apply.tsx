
import React, { useState } from 'react';

const Apply: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    major: '',
    phone: '',
    motivation: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate Backend Save using LocalStorage
    const existingApps = JSON.parse(localStorage.getItem('applicants') || '[]');
    const newApp = {
      ...formData,
      id: Date.now(),
      submittedAt: new Date().toLocaleString()
    };
    
    localStorage.setItem('applicants', JSON.stringify([...existingApps, newApp]));
    
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <section className="min-h-screen bg-slate-50 py-24 px-6 flex items-center justify-center">
        <div className="max-w-lg w-full bg-white p-12 rounded-[2.5rem] shadow-xl border border-gray-100 text-center space-y-6">
           <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
           </div>
           <h2 className="text-3xl font-black text-slate-900">제출 완료!</h2>
           <p className="text-slate-600 leading-relaxed">
             모두의 문제연구소 지원이 성공적으로 접수되었습니다.<br/>
             검토 후 개별적으로 연락드리겠습니다.
           </p>
           <button 
             onClick={() => setSubmitted(false)} 
             className="mt-8 bg-[#2563EB] text-white px-8 py-3 rounded-full font-bold hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-200"
           >
             확인
           </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <span className="text-[#2563EB] font-bold tracking-widest uppercase text-xs">Join Us</span>
          <h2 className="text-4xl font-black text-slate-900">지원서 작성</h2>
          <p className="text-slate-500">데이터로 세상을 증명할 당신의 이야기를 들려주세요.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-100 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">이름</label>
              <input 
                type="text" 
                name="name" 
                required 
                value={formData.name}
                onChange={handleChange}
                placeholder="홍길동"
                className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">학번</label>
              <input 
                type="text" 
                name="studentId" 
                required 
                value={formData.studentId}
                onChange={handleChange}
                placeholder="2024000000"
                className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
             <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">학과</label>
              <input 
                type="text" 
                name="major" 
                required 
                value={formData.major}
                onChange={handleChange}
                placeholder="수리데이터사이언스학과"
                className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">연락처</label>
              <input 
                type="tel" 
                name="phone" 
                required 
                value={formData.phone}
                onChange={handleChange}
                placeholder="010-0000-0000"
                className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-1">지원 동기 및 포부</label>
            <textarea 
              name="motivation" 
              required 
              value={formData.motivation}
              onChange={handleChange}
              rows={5}
              placeholder="데이터 분석에 대한 관심과 연구소에서 하고 싶은 활동을 자유롭게 적어주세요."
              className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
            ></textarea>
          </div>

          <div className="pt-4">
            <button 
              type="submit" 
              className="w-full bg-[#2563EB] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#1d4ed8] transition-all transform hover:scale-[1.01] shadow-xl shadow-blue-200"
            >
              제출하기
            </button>
            <p className="text-center text-xs text-slate-400 mt-4">
              제출된 정보는 선발 목적으로만 사용되며, 그 외의 용도로 사용되지 않습니다.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Apply;
