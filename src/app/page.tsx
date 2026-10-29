import React from 'react';

export default function Home() {
  return (
    <main className="p-6 bg-slate-950 text-slate-100 min-h-screen">
      <h1 className="text-3xl font-extrabold mb-4 text-emerald-400">KuyTrade Dashboard</h1>
      <p className="text-slate-400 mb-6">ระบบบริหารจัดการเทรดและสแกน AI พร้อมใช้งานแล้ว</p>
      
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
          <div className="text-xs text-slate-400">กำไรสุทธิ</div>
          <div className="text-2xl font-bold text-emerald-400">+$14.79</div>
        </div>
        <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
          <div className="text-xs text-slate-400">EQUITY</div>
          <div className="text-2xl font-bold text-white">$4,024.29</div>
        </div>
      </div>
    </main>
  );
}
