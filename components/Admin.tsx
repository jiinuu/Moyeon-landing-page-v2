
import React, { useEffect, useState } from 'react';

// Data Types
interface Applicant {
  id: number;
  name: string;
  studentId: string;
  major: string;
  phone: string;
  motivation: string;
  submittedAt: string;
}

interface PartnershipInquiry {
  id: number;
  orgName: string;
  contactPerson: string;
  email: string;
  phone: string;
  type: string;
  message: string;
  submittedAt: string;
}

interface TopicSuggestionItem {
  id: number;
  topic: string;
  description: string;
  submittedAt: string;
}

type Tab = 'analytics' | 'applicants' | 'partnerships' | 'topics';

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('analytics');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Data States
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [inquiries, setInquiries] = useState<PartnershipInquiry[]>([]);
  const [topics, setTopics] = useState<TopicSuggestionItem[]>([]);
  
  // Analytics State
  const [totalVisitors, setTotalVisitors] = useState(0);
  const [pageViews, setPageViews] = useState<Record<string, number>>({});

  useEffect(() => {
    // Load real data from LocalStorage
    setApplicants(JSON.parse(localStorage.getItem('applicants') || '[]'));
    setInquiries(JSON.parse(localStorage.getItem('partnership_inquiries') || '[]'));
    setTopics(JSON.parse(localStorage.getItem('topic_suggestions') || '[]'));
    
    // Load Analytics
    setTotalVisitors(parseInt(localStorage.getItem('analytics_visitors') || '0'));
    setPageViews(JSON.parse(localStorage.getItem('analytics_page_views') || '{}'));
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'jinwoopark') {
      setIsAuthenticated(true);
    } else {
      alert('비밀번호가 틀렸습니다.');
    }
  };

  const handleDeleteApplicant = (id: number) => {
    if (window.confirm('삭제하시겠습니까?')) {
      const updated = applicants.filter(app => app.id !== id);
      setApplicants(updated);
      localStorage.setItem('applicants', JSON.stringify(updated));
    }
  };

  const handleDeleteInquiry = (id: number) => {
    if (window.confirm('삭제하시겠습니까?')) {
      const updated = inquiries.filter(inq => inq.id !== id);
      setInquiries(updated);
      localStorage.setItem('partnership_inquiries', JSON.stringify(updated));
    }
  };

  const handleDeleteTopic = (id: number) => {
    if (window.confirm('삭제하시겠습니까?')) {
      const updated = topics.filter(t => t.id !== id);
      setTopics(updated);
      localStorage.setItem('topic_suggestions', JSON.stringify(updated));
    }
  };

  if (!isAuthenticated) {
    return (
      <section className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm space-y-6">
           <div className="text-center">
             <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mx-auto mb-4 text-white text-xl">🔒</div>
             <h2 className="text-xl font-black text-slate-900">Research Admin</h2>
           </div>
           <form onSubmit={handleLogin} className="space-y-4">
             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500" />
             <button type="submit" className="w-full bg-[#2563EB] text-white py-3 rounded-xl font-bold">Login</button>
           </form>
        </div>
      </section>
    );
  }

  const conversionRate = totalVisitors > 0 ? ((applicants.length / totalVisitors) * 100).toFixed(1) : '0';

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      <aside className="w-full md:w-64 bg-slate-900 text-white flex-shrink-0">
        <div className="p-6">
          <h1 className="text-xl font-black mb-8">Admin Console</h1>
          <nav className="space-y-2">
            <NavButton active={activeTab === 'analytics'} onClick={() => setActiveTab('analytics')} icon="📈" label="Analytics" />
            <NavButton active={activeTab === 'applicants'} onClick={() => setActiveTab('applicants')} icon="👥" label="지원자 관리" count={applicants.length} />
            <NavButton active={activeTab === 'partnerships'} onClick={() => setActiveTab('partnerships')} icon="🤝" label="협업 문의" count={inquiries.length} />
            <NavButton active={activeTab === 'topics'} onClick={() => setActiveTab('topics')} icon="💡" label="주제 제안" count={topics.length} />
          </nav>
        </div>
        <div className="p-6 mt-auto border-t border-slate-800">
          <button onClick={() => setIsAuthenticated(false)} className="text-sm font-bold text-slate-400 hover:text-white">로그아웃</button>
        </div>
      </aside>

      <main className="flex-1 p-6 md:p-12 overflow-y-auto h-screen">
        {activeTab === 'analytics' && <AnalyticsDashboard totalVisitors={totalVisitors} pageViews={pageViews} conversionRate={conversionRate} />}
        {activeTab === 'applicants' && <ApplicantManager applicants={applicants} onDelete={handleDeleteApplicant} />}
        {activeTab === 'partnerships' && <PartnershipManager inquiries={inquiries} onDelete={handleDeleteInquiry} />}
        {activeTab === 'topics' && <TopicManager topics={topics} onDelete={handleDeleteTopic} />}
      </main>
    </div>
  );
};

const NavButton = ({ active, onClick, icon, label, count }: any) => (
  <button onClick={onClick} className={`w-full flex justify-between px-4 py-3 rounded-xl transition-all ${active ? 'bg-[#2563EB] text-white' : 'text-slate-400 hover:bg-slate-800'}`}>
    <div className="flex gap-3"><span>{icon}</span><span className="font-bold text-sm">{label}</span></div>
    {count !== undefined && <span className="text-xs bg-white/20 px-2 rounded-full">{count}</span>}
  </button>
);

const AnalyticsDashboard = ({ totalVisitors, pageViews, conversionRate }: any) => {
  const maxView = Math.max(...Object.values(pageViews) as number[], 1);
  const getPercentage = (viewCount: number) => Math.round((viewCount / maxView) * 100);
  return (
    <div className="space-y-8 animate-fade-in-up">
      <h2 className="text-3xl font-black text-slate-900">Analytics</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KPICard title="Total Views" value={totalVisitors.toLocaleString()} />
        <KPICard title="Conversion" value={`${conversionRate}%`} />
        <KPICard title="Topic Ideas" value={localStorage.getItem('topic_suggestions') ? JSON.parse(localStorage.getItem('topic_suggestions')!).length : 0} />
      </div>
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
         <h3 className="font-bold text-slate-800 mb-4">Page Views</h3>
         <div className="space-y-3">
            {Object.entries(pageViews).map(([page, count]: any) => (
               <div key={page} className="flex items-center gap-4">
                  <span className="w-24 text-xs font-bold text-slate-600 uppercase">{page}</span>
                  <div className="flex-1 h-2 bg-slate-100 rounded-full"><div className="h-full bg-blue-500 rounded-full" style={{ width: `${getPercentage(count)}%` }}></div></div>
                  <span className="w-8 text-right text-xs text-slate-400">{count}</span>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};

const KPICard = ({ title, value }: any) => (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <p className="text-slate-400 text-xs font-bold uppercase mb-2">{title}</p>
        <h3 className="text-2xl font-black text-slate-900">{value}</h3>
    </div>
);

const ApplicantManager = ({ applicants, onDelete }: any) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-black">지원자 관리</h2>
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-slate-50 border-b border-gray-200">
          <tr><th className="p-4 text-xs uppercase">이름</th><th className="p-4 text-xs uppercase">지원동기</th><th className="p-4 text-right">Action</th></tr>
        </thead>
        <tbody>
          {applicants.map((a: any) => (
            <tr key={a.id} className="border-b hover:bg-slate-50">
              <td className="p-4 font-bold">{a.name} <span className="block text-xs text-slate-400">{a.major}</span></td>
              <td className="p-4 text-sm text-slate-600 line-clamp-1">{a.motivation}</td>
              <td className="p-4 text-right"><button onClick={() => onDelete(a.id)} className="text-red-500 text-xs font-bold">삭제</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const PartnershipManager = ({ inquiries, onDelete }: any) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-black">협업 문의</h2>
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-slate-50 border-b border-gray-200">
          <tr><th className="p-4 text-xs uppercase">기관</th><th className="p-4 text-xs uppercase">내용</th><th className="p-4 text-right">Action</th></tr>
        </thead>
        <tbody>
          {inquiries.map((q: any) => (
            <tr key={q.id} className="border-b hover:bg-slate-50">
              <td className="p-4 font-bold">{q.orgName}</td>
              <td className="p-4 text-sm text-slate-600 line-clamp-1">{q.message}</td>
              <td className="p-4 text-right"><button onClick={() => onDelete(q.id)} className="text-red-500 text-xs font-bold">삭제</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const TopicManager = ({ topics, onDelete }: any) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-black">주제 제안 관리</h2>
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-slate-50 border-b border-gray-200">
          <tr><th className="p-4 text-xs uppercase">주제</th><th className="p-4 text-xs uppercase">설명</th><th className="p-4 text-right">Action</th></tr>
        </thead>
        <tbody>
          {topics.length === 0 ? <tr><td colSpan={3} className="p-8 text-center text-slate-400">제안된 주제가 없습니다.</td></tr> :
          topics.map((t: any) => (
            <tr key={t.id} className="border-b hover:bg-slate-50">
              <td className="p-4 font-bold">{t.topic}</td>
              <td className="p-4 text-sm text-slate-600">{t.description}</td>
              <td className="p-4 text-right"><button onClick={() => onDelete(t.id)} className="text-red-500 text-xs font-bold">삭제</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Admin;
