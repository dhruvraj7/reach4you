import React from 'react';

export default function Card({ children, className = '', hover = true }) {
  return (
    <div className={`bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs ${
      hover ? 'hover-lift hover:border-orange-300/80 hover:shadow-lg hover:shadow-slate-200/40' : ''
    } ${className}`}>
      {children}
    </div>
  );
}
