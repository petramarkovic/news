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
			<div className='self-stretch h-full flex flex-col p-5 pt-32 overflow-hidden relative justify-end'>
				<div className='absolute top-0 left-0 w-full h-full object-cover mt-auto'>
					<img
						src={urlToImage ?? placeholderImage}
						alt={description}
						className='absolute top-0 left-0 w-full h-full object-cover rounded-t-lg rounded-tr-lg pointer-events-none mix-blend-darken'
					/>
				</div>
			</div>
			<h3 className='text-darkTernary font-semibold relative z-10 p-6'>{title}</h3>
		</>
	);
};
