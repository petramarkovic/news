import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, className, ...rest }) => {
    const predefinedClasses = 'text-xl text-slate-500 font-bold transition ease-in-out';
    const combinedClasses = `${predefinedClasses} ${className || ''}`;
  return (
    <button className={combinedClasses} {...rest}>
        {children}
    </button>
  )
}
