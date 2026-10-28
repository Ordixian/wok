import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => (
  <div
    className={`rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm ${className}`}
    {...props}
  >
    {children}
  </div>
);
