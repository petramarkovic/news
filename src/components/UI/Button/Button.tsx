import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
}

export const Button: React.FC<ButtonProps> = ({
	children,
	className,
	...rest
}) => {
	return (
		<button className={className} {...rest}>
			{children}
		</button>
	);
};
