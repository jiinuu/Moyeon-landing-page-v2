
import React, { useState } from 'react';

const Partnership: React.FC = () => {
  const [formData, setFormData] = useState({
    orgName: '',
    contactPerson: '',
    email: '',
    phone: '',
    type: '정책 자문',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send an email or save to DB
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo(0, 0);
    }, 500);
  };

  if (submitted) {
    return (
      <section className="min-h-screen bg-slate-50 py-24 px-6 flex items-center justify-center">
        <div className="max-w-lg w-full bg-white p-12 rounded-[2.5rem] shadow-xl border border-gray-100 text-center space-y-6">
           <div className="w-20 h-20 bg-blue-100 text-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
           </div>
           <h2 className="text-3xl font-black text-slate-900">문의가 접수되었습니다</h2>
           <p className="text-slate-600 leading-relaxed">
             모두의 문제연구소에 관심을 가져주셔서 감사합니다.<br/>
             담당 연구원이 검토 후 <strong>{formData.email}</strong>로<br/>3일 이내에 회신 드리겠습니다.
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
          <span className="text-[#2563EB] font-bold tracking-widest uppercase text-xs">Partnership</span>
          <h2 className="text-4xl font-black text-slate-900">협업 제안하기</h2>
          <p className="text-slate-500">데이터 기반의 문제 해결 솔루션이 필요하신가요?</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100 space-y-8">
          
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-900 border-b border-gray-100 pb-2">기본 정보</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">기관/기업명</label>
                <input 
                  type="text" 
                  name="orgName" 
                  required 
                  value={formData.orgName}
                  onChange={handleChange}
                  placeholder="모두의 컴퍼니"
                  className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">담당자 성함</label>
                <input 
                  type="text" 
                  name="contactPerson" 
                  required 
                  value={formData.contactPerson}
                  onChange={handleChange}
                  placeholder="김담당"
                  className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">이메일</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="contact@company.com"
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
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-900 border-b border-gray-100 pb-2">협업 내용</h3>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">협업 유형</label>
              <select 
                name="type" 
                value={formData.type}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
              >
                <option>정책 자문 및 데이터 분석 요청</option>
                <option>공동 연구 및 프로젝트 수행</option>
                <option>기업 데이터 분석 과제 의뢰</option>
                <option>기타 문의</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">제안 내용</label>
              <textarea 
                name="message" 
                required 
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="구체적인 협업 내용이나 해결하고자 하는 문제 상황을 적어주세요."
                className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
              ></textarea>
            </div>
          </div>

          <div className="pt-4">
            <button 
              type="submit" 
              className="w-full bg-[#2563EB] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#1d4ed8] transition-all transform hover:scale-[1.01] shadow-xl shadow-blue-200"
            >
              제안서 보내기
            </button>
            <p className="text-center text-xs text-slate-400 mt-4">
              보내주신 제안 내용은 검토 후 내부 연구 윤리 규정에 따라 진행 여부가 결정됩니다.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Partnership;
