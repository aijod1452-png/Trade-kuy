import React from 'react';

export const TradingTerminal: React.FC = () => {
  return (
    <div className="p-6 bg-slate-950 text-slate-100 min-h-screen grid grid-cols-3 gap-6">
      <div className="col-span-2 space-y-6">
        <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 h-96 flex items-center justify-center">
          <span className="font-bold">XAUUSD.p Chart Container</span>
        </div>
      </div>
      <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 space-y-4">
        <h2 className="font-bold text-lg">ออเดอร์ที่เตรียมไว้</h2>
        <div className="grid grid-cols-2 gap-2">
          <button className="bg-rose-600 py-2 rounded font-bold">Sell</button>
          <button className="bg-emerald-600 py-2 rounded font-bold">Buy</button>
        </div>
      </div>
    </div>
  );
};
