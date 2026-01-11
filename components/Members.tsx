
import React from 'react';

const Members: React.FC = () => {
  const members = [
    { role: '학회장', name: '김민수', major: '수리데이터사이언스 21', img: 'https://placehold.co/150x150/2563eb/ffffff?text=K' },
    { role: '부학회장', name: '이영희', major: '수리데이터사이언스 22', img: 'https://placehold.co/150x150/2563eb/ffffff?text=L' },
    { role: '학술부장', name: '박진우', major: '컴퓨터공학 20', img: 'https://placehold.co/150x150/2563eb/ffffff?text=P' },
    { role: '홍보부장', name: '최지수', major: '경영학 22', img: 'https://placehold.co/150x150/2563eb/ffffff?text=C' },
  ];

  return (
    <section className="bg-white min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-black text-slate-900 mb-16">Our Team</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {members.map((m, i) => (
            <div key={i} className="group">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 shadow-lg border-4 border-slate-50 group-hover:border-blue-100 transition-colors">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{m.name}</h3>
              <p className="text-[#2563EB] font-bold text-sm mb-1">{m.role}</p>
              <p className="text-slate-500 text-xs">{m.major}</p>
            </div>
          ))}
        </div>
        <div className="mt-20 p-10 bg-slate-50 rounded-[3rem]">
           <h3 className="text-2xl font-black text-slate-800 mb-4">Join 20+ Researchers</h3>
           <p className="text-slate-500 mb-8">열정 있는 당신이 다음 주인공입니다.</p>
           <button className="bg-[#2563EB] text-white px-8 py-3 rounded-full font-bold">지원하러 가기</button>
        </div>
      </div>
    </section>
  );
};

export default Members;
