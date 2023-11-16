import React from 'react';

type WrapProps = {
	children: React.ReactNode;
};

export const Wrap: React.FC<WrapProps> = ({ children }) => {
	return (
		<div className='max-w-7xl mr-auto ml-auto w-full px-5'>{children}</div>
	);
};
