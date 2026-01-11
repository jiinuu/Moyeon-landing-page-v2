
import React, { useEffect, useState } from 'react';

interface Applicant {
  id: number;
  name: string;
  studentId: string;
  major: string;
  phone: string;
  motivation: string;
  submittedAt: string;
}

const Admin: React.FC = () => {
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Load data from LocalStorage on mount
    const savedApps = JSON.parse(localStorage.getItem('applicants') || '[]');
    setApplicants(savedApps);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin1234') { // Simple demo password
      setIsAuthenticated(true);
    } else {
      alert('비밀번호가 틀렸습니다.');
    }
  };

  const handleDelete = (id: number) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      const updated = applicants.filter(app => app.id !== id);
      setApplicants(updated);
      localStorage.setItem('applicants', JSON.stringify(updated));
    }
  };

  if (!isAuthenticated) {
    return (
      <section className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm space-y-6">
           <div className="text-center">
             <h2 className="text-xl font-black text-slate-900">Admin Access</h2>
             <p className="text-sm text-slate-500">관리자 비밀번호를 입력하세요.</p>
           </div>
           <form onSubmit={handleLogin} className="space-y-4">
             <input 
               type="password" 
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               placeholder="Password (admin1234)"
               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
             />
             <button type="submit" className="w-full bg-slate-900 text-white py-2 rounded-lg font-bold">로그인</button>
           </form>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-black text-slate-900">지원자 관리</h2>
            <p className="text-slate-500">총 {applicants.length}명의 지원자가 있습니다.</p>
          </div>
          <button onClick={() => setIsAuthenticated(false)} className="text-sm text-red-500 font-bold hover:underline">로그아웃</button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-gray-200">
                  <th className="p-4 font-bold text-slate-700 text-sm">접수일시</th>
                  <th className="p-4 font-bold text-slate-700 text-sm">이름</th>
                  <th className="p-4 font-bold text-slate-700 text-sm">학번</th>
                  <th className="p-4 font-bold text-slate-700 text-sm">학과</th>
                  <th className="p-4 font-bold text-slate-700 text-sm">연락처</th>
                  <th className="p-4 font-bold text-slate-700 text-sm w-1/3">지원동기</th>
                  <th className="p-4 font-bold text-slate-700 text-sm text-right">관리</th>
                </tr>
              </thead>
              <tbody>
                {applicants.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="p-12 text-center text-slate-400">아직 지원자가 없습니다.</td>
                  </tr>
                ) : (
                  applicants.map((app) => (
                    <tr key={app.id} className="border-b border-gray-100 hover:bg-slate-50 transition-colors">
                      <td className="p-4 text-sm text-slate-500 whitespace-nowrap">{app.submittedAt}</td>
                      <td className="p-4 font-bold text-slate-900 whitespace-nowrap">{app.name}</td>
                      <td className="p-4 text-sm text-slate-700 whitespace-nowrap">{app.studentId}</td>
                      <td className="p-4 text-sm text-slate-700 whitespace-nowrap">{app.major}</td>
                      <td className="p-4 text-sm text-slate-700 whitespace-nowrap">{app.phone}</td>
                      <td className="p-4 text-sm text-slate-600 line-clamp-2 max-w-xs">{app.motivation}</td>
                      <td className="p-4 text-right">
                        <button 
                          onClick={() => handleDelete(app.id)}
                          className="text-red-500 hover:bg-red-50 px-3 py-1 rounded-md text-xs font-bold transition-colors"
                        >
                          삭제
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
