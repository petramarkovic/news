import React from 'react';
import { ArticleInterface } from '../../types';
import placeholderImage from '../../assets/placeholder-image.jpg';

export const Card: React.FC<ArticleInterface> = ({
	title,
	urlToImage,
	description
}) => {
	return (
		<div className='self-stretch h-full flex flex-col p-5 pt-32 overflow-hidden relative rounded-lg'>
			<h3 className='text-darkTernary font-semibold relative z-10'>{title}</h3>
			<div className='absolute top-0 left-0 w-full h-full object-cover mt-auto overflow-hidden'>
				<img
					src={urlToImage ?? placeholderImage}
					alt={description}
					className='absolute top-0 left-0 w-full h-full object-cover rounded-lg opacity-40 pointer-events-none mix-blend-darken'
				/>
			</div>
		</div>
	);
};
