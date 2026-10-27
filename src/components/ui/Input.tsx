import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, className = '', ...rest }) => (
  <div className={`flex flex-col space-y-1 ${className}`}>
    <label className="text-sm font-medium text-slate-700"&#62;{label}</label>
    <input className="border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" {...rest} /&#62;
  </div>
);
