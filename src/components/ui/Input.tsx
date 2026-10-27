import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, className = '', ...rest }) => (
  <div className={`flex flex-col space-y-1 ${className}`}>
    {label && <label className="text-sm font-medium text-slate-700">{label}</label>}
    <input className="border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E30613]" {...rest} />
  </div>
);
