import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

export const Input: React.FC<InputProps> = ({ label, ...props }) => {
	return (
		<label className='text-ternary text-xl font-bold'>
			{label}
			<input
				{...props}
				className='bg-transparent font-medium border-b-2 border-dark border-opacity-20 p-5 w-full text-secondaryDark focus-visible:outline-none mt-2'
			/>
		</label>
	);
};
