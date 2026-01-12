
import React from 'react';

interface MembersProps {
  onNavigate: (view: any) => void;
}

const Members: React.FC<MembersProps> = ({ onNavigate }) => {
  const members = [
    { role: '연구원', name: '박진우', major: '수리데이터사이언스 석사과정', img: 'https://ui-avatars.com/api/?name=Jinwoo+Park&background=random&color=fff' },
    { role: '연구원', name: '나동욱', major: '수리데이터사이언스학과 학부과정', img: 'https://ui-avatars.com/api/?name=Dongwook+Na&background=random&color=fff' },
    { role: '연구원', name: '한주형', major: '수리데이터사이언스학과 학부과정', img: 'https://ui-avatars.com/api/?name=Juhyeong+Han&background=random&color=fff' },
    { role: '연구원', name: '조우진', major: '수리데이터사이언스학과 학부과정', img: 'https://ui-avatars.com/api/?name=Woojin+Jo&background=random&color=fff' },
    { role: '연구원', name: '김기정', major: '수리데이터사이언스학과 학부과정', img: 'https://ui-avatars.com/api/?name=Gijeong+Kim&background=random&color=fff' },
  ];

  return (
    <section className="bg-white min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-[#2563EB] font-bold tracking-widest uppercase text-xs">People</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2">Researchers</h2>
        </div>

        {/* Professor Section */}
        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-100 mb-24">
           <div className="flex flex-col lg:flex-row gap-12">
              
              {/* Profile Card */}
              <div className="w-full lg:w-1/3 flex-shrink-0">
                 <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100 text-center sticky top-24">
                    <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-slate-50 shadow-inner bg-slate-200">
                       <img 
                        src="https://lh3.googleusercontent.com/sitesv/AAzXCkf_WErziRHbdIDsFpEcDkbTqdgKiDE5vElDjwpyU902as-PU08c7wW3VRAsliXksmGqNzH4bGoRnXaaSO5Wi6Tc_Cu1URxCdGpqQHQaHxDnpNei6DAYi8d4ZH0P0W-N5GqDowaA_MaacES7VXOqH4-SmWIBkub2xVwXkLJ8lhGpXlGPWkzfdYWI309IuhS_x8cfibvFxFmFmjanB71Xdsd4Zk3HfpzEAovnMpo=w1280" 
                        alt="정혜영 교수님" 
                        className="w-full h-full object-cover"
                       />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-1">정혜영 교수</h3>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-6">Hye-Young Jung</p>
                    
                    <div className="space-y-3 text-sm text-slate-600 font-medium text-left bg-slate-50 p-6 rounded-2xl">
                       <p className="flex flex-col">
                         <span className="text-xs text-slate-400 font-bold uppercase mb-1">Position</span>
                         Associate Professor,<br/>Dept. of Mathematical Data Science
                       </p>
                       <p className="flex flex-col">
                         <span className="text-xs text-slate-400 font-bold uppercase mb-1">Email</span>
                         hyjunglove@hanyang.ac.kr
                       </p>
                       <p className="flex flex-col">
                         <span className="text-xs text-slate-400 font-bold uppercase mb-1">Office</span>
                         031-400-5463
                       </p>
                    </div>
                    
                    <div className="mt-6">
                      <a 
                        href="https://sites.google.com/view/hye-young-jung/professor" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#2563EB] font-bold hover:underline transition-all"
                      >
                        Personal Website ↗
                      </a>
                    </div>
                 </div>
              </div>

              {/* Lab Info & Advisor Message */}
              <div className="flex-1 space-y-10">
                 <div>
                    <div className="inline-block bg-[#2563EB] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 shadow-md shadow-blue-200">
                      Advisor's Message
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 mb-6 leading-tight">
                      데이터의 '정확도'보다<br/>
                      <span className="text-[#2563EB]">신뢰(Trust)</span>를 연구합니다
                    </h3>
                    <div className="text-slate-600 leading-relaxed text-lg space-y-4 mb-8">
                      <p>
                        안녕하세요, 지도교수 정혜영입니다. 제가 이끄는 <strong>Intelligence Data Science Lab (IDSL)</strong>은 AI가 무엇을 예측하는가보다, <strong>"그 예측을 언제 신뢰해야 하고, 언제 멈춰야 하는가"</strong>를 연구합니다. 불확실한 현실 세계에서 AI가 실패하는 지점을 아는 것이야말로 진정한 지능이기 때문입니다.
                      </p>
                      <p>
                        저는 <strong>모두의 문제연구소</strong> 학생들이 이러한 철학을 바탕으로 성장하기를 바랍니다. 단순히 데이터를 분석하는 기술을 넘어, <strong>데이터 뒤에 숨겨진 불확실성을 탐구하고, 사회적 책임감을 갖춘 의사결정</strong>을 내릴 수 있는 인재로 키우고자 합니다.
                      </p>
                      <p>
                        여러분이 이곳에서 정의하는 문제와 제안하는 솔루션이, 더 안전하고 신뢰할 수 있는 세상을 만드는 단단한 초석이 되기를 기대합니다.
                      </p>
                    </div>
                 </div>

                 <div className="space-y-4">
                    <h4 className="font-bold text-slate-900 border-b border-gray-200 pb-3 mb-6 flex items-center gap-2">
                       <span className="bg-slate-900 text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-xs">Lab</span>
                       Research Foundations (IDSL)
                    </h4>
                    
                    {/* System 1 */}
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-blue-200 transition-colors group">
                       <div className="flex items-start gap-5">
                          <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform flex-shrink-0">🏥</div>
                          <div>
                             <h5 className="font-bold text-slate-900 text-base mb-1">System 1 (Medical)</h5>
                             <p className="text-xs font-bold text-[#2563EB] uppercase tracking-wide mb-2">Uncertainty-Aware Medical Decision Support Systems</p>
                             <p className="text-sm text-slate-500 leading-relaxed">
                               의료 영상, 생체 신호, 임상 시계열 데이터에서 AI 예측의 불확실성과 이상 패턴을 분석하여 자동 진단을 그대로 사용할 수 없는 상황을 탐지합니다. AI 판단의 신뢰도가 저하되는 구간을 사전에 식별하여 의료진의 개입이 필요한 시점을 데이터로 설명합니다.
                             </p>
                          </div>
                       </div>
                    </div>

                    {/* System 2 */}
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-blue-200 transition-colors group">
                       <div className="flex items-start gap-5">
                          <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform flex-shrink-0">📈</div>
                          <div>
                             <h5 className="font-bold text-slate-900 text-base mb-1">System 2 (Financial)</h5>
                             <p className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-2">Risk-Aware Financial Decision Control Systems</p>
                             <p className="text-sm text-slate-500 leading-relaxed">
                               거래 데이터와 금융 시계열에서 발생하는 이상 징후, 분포 변화, 예측 불안정성의 누적 양상을 분석합니다. 자동화된 금융 의사결정이 언제 중단되거나 수동 검토로 전환되어야 하는지를 판단하는 분석 프레임워크를 개발하여 신중한 의사결정을 지원합니다.
                             </p>
                          </div>
                       </div>
                    </div>

                    {/* System 3 */}
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-blue-200 transition-colors group">
                       <div className="flex items-start gap-5">
                          <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform flex-shrink-0">🤖</div>
                          <div>
                             <h5 className="font-bold text-slate-900 text-base mb-1">System 3 (Physical AI)</h5>
                             <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Safe Decision and Action Transition for Physical AI</p>
                             <p className="text-sm text-slate-500 leading-relaxed">
                               로봇 및 자율 시스템 환경에서 센서 데이터와 시계열 정보를 활용하여, AI의 판단이 실제 행동으로 이어질 때의 위험을 분석합니다. 센서 불확실성을 기반으로 AI 시스템이 스스로 판단을 보류하거나 인간 제어로 전환해야 하는 기준을 연구합니다.
                             </p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Team Members Grid */}
        <h3 className="text-2xl font-black text-slate-900 mb-10 text-center">Research Team</h3>
        <div className="grid md:grid-cols-4 gap-8 mb-20 max-w-6xl mx-auto">
          {members.map((m, i) => (
            <div key={i} className="group bg-slate-50 rounded-3xl p-6 text-center hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-blue-100">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-6 shadow-md border-2 border-white group-hover:border-blue-100 transition-colors bg-white">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{m.name}</h3>
              <p className="text-[#2563EB] font-bold text-xs uppercase tracking-wide mb-2">{m.role}</p>
              <p className="text-slate-500 text-xs font-medium">{m.major}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="p-12 bg-slate-900 rounded-[3rem] text-center text-white relative overflow-hidden">
           <div className="relative z-10">
             <h3 className="text-3xl font-black mb-4">Join 20+ Researchers</h3>
             <p className="text-slate-400 mb-8 max-w-lg mx-auto">
               데이터의 불확실성을 탐구하고, 신뢰할 수 있는 AI를 만드는 여정에 함께하세요.
             </p>
             <button 
               onClick={() => onNavigate('apply')}
               className="bg-[#2563EB] text-white px-10 py-4 rounded-full font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/50 transform hover:scale-105"
             >
               지원하러 가기
             </button>
           </div>
           
           {/* Deco */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
};

export default Members;
