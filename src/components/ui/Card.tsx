import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ title, children, className = '' }) => (
  <div className={`border border-border rounded-lg p-4 shadow-sm bg-white ${className}`}>
    <h3 className="text-lg font-semibold mb-2 text-slate-800">{title}</h3>
    <div className="text-sm text-slate-600">{children}</div>
  </div>
);
