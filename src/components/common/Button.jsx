import React from 'react';

export default function Button({ children, variant = 'primary', className = '', onClick, icon: Icon, ...props }) {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full font-semibold text-sm transition-premium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";
  
  const variants = {
    primary: "bg-[#FF4500] text-white hover:bg-[#E03D00] shadow-md shadow-[#FF4500]/20 hover:shadow-xl hover:shadow-[#FF4500]/35 hover:-translate-y-0.5 px-5 py-2.5",
    secondary: "bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:-translate-y-0.5 px-5 py-2.5",
    outline: "bg-white text-slate-800 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 px-5 py-2.5 shadow-xs hover:-translate-y-0.5",
    glass: "bg-white/80 backdrop-blur-md text-slate-900 border border-slate-200/80 hover:bg-white px-5 py-2.5 shadow-xs hover:-translate-y-0.5",
    ghost: "text-slate-600 hover:text-slate-950 hover:bg-slate-100/80 px-4 py-2"
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {Icon && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />}
    </button>
  );
}
