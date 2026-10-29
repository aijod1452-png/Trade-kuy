import React from 'react';

export const RiskAnalytics: React.FC = () => {
  return (
    <div className="p-6 bg-slate-950 text-slate-100 min-h-screen">
      <h1 className="text-xl font-bold mb-4">วิเคราะห์ความเสี่ยง</h1>
      <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
        <div>Calmar Ratio / Recovery Factor / Trader Score</div>
      </div>
    </div>
  );
};
