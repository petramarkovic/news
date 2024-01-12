import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string
}

export const Input: React.FC<InputProps> = ({ label, ...props }) => {
	return (
		<label className='text-white'>
			{label}
			<input
				{...props}
				className='bg-transparent border-2 border-rose-100 border-opacity-20 rounded-lg p-5 w-full text-white focus-visible:outline-none mt-2'
			/>
		</label>
	);
};
