import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center font-bold rounded-lg transition-all focus:outline-none';
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  const variants = {
    primary: 'bg-[#E30613] text-white hover:bg-[#b8000a] shadow-sm',
    outline:
      'border-2 border-[#E30613] text-[#E30613] bg-white hover:bg-[#E30613] hover:text-white',
    secondary: 'bg-slate-900 text-white hover:bg-slate-800',
  };

  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
