import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    customClasses?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, className, customClasses, ...rest }) => {
    const predefinedClasses = 'text-xl text-slate-500 font-bold p-3 transition ease-in-out';
    const combinedClasses = `${predefinedClasses} ${className || ''}  ${customClasses || ''}`;
  return (
    <button className={combinedClasses} {...rest}>
        {children}
    </button>
  )
}
