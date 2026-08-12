import React from 'react';

export default function Card({ children, className = '' }) {
  return (
    <div className={`p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}
