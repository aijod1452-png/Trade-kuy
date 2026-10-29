import React from 'react';
import './globals.css';

export const metadata = {
  title: 'KuyTrade Dashboard',
  description: 'Trading & AI Strategy System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className="bg-slate-950 text-slate-100 min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
