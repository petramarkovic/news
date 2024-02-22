import React from 'react';
import { ArticleInterface } from '../../types';
import placeholderImage from '../../assets/placeholder-image.jpg';

export const Card: React.FC<ArticleInterface> = ({
	title,
	urlToImage,
	description
}) => {
	return (
		<>
			<div className='relative min-h-[20rem] max-h-[20rem]'>
				<img
					src={urlToImage ?? placeholderImage}
					alt={description}
					className='absolute top-0 left-0 w-full h-full object-cover rounded-t-lg rounded-tr-lg pointer-events-none mix-blend-darken'
				/>
			</div>
			<div className='flex items-center h-full'>
				<h3 className='text-darkTernary font-semibold relative z-10 p-5 pr-8'>
					{title}
				</h3>
			</div>
		</>
	);
};
