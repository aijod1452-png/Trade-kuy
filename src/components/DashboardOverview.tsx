import React from 'react';

export const DashboardOverview: React.FC = () => {
  return (
    <div className="p-6 bg-slate-950 text-slate-100 min-h-screen">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">ภาพรวม</h1>
        <div className="text-sm text-slate-400">Sync: 17:43:59</div>
      </header>
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
          <div className="text-xs text-slate-400">กำไรสุทธิ</div>
          <div className="text-2xl font-extrabold text-emerald-400">+$14.79</div>
        </div>
      </div>
    </div>
  );
};
