import React from 'react';

const Loader: React.FC = () => {
	return (
		<div className='flex justify-end items-center h-5 absolute bottom-6 right-5 py-2'>
			<div className='animate-spin rounded-full h-5 w-5 border-t-4 border-secondary border-t-solid'></div>
		</div>
	);
};

export default Loader;
