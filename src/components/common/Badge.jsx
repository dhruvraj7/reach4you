import React from 'react';

export default function Badge({ children, icon: Icon, variant = 'orange', className = '' }) {
  const variants = {
    orange: 'bg-orange-50 text-[#FF4500] border-orange-200/60',
    dark: 'bg-slate-900 text-slate-100 border-slate-800',
    slate: 'bg-slate-100 text-slate-700 border-slate-200',
    green: 'bg-emerald-50 text-emerald-700 border-emerald-200/60'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border shadow-xs ${variants[variant] || variants.orange} ${className}`}>
      {Icon && <Icon className="w-3.5 h-3.5" />}
      <span>{children}</span>
    </span>
  );
}
