import * as reactRouterDom from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Wrap } from '../components/UI/Wrap/Wrap';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { ArticleInterface } from '../types';
import { twMerge } from 'tailwind-merge';
import { useTranslation } from 'react-i18next';

export const Article = () => {
	const { state } = reactRouterDom.useLocation();
	// TODO Destructure articleData
	const articleData: ArticleInterface = state;
	const { t } = useTranslation();

	return (
		<div className='min-h-screen'>
			<Wrap>
				<article className='pt-20'>
					<h1 className='text-4xl text-dark text-center font-bold mb-10'>
						{articleData.title}
					</h1>
					<div className='lg:flex mb-10 lg:flex-wrap'>
						<img
							className='object-cover max-w-full w-full m-auto rounded-lg shadow-2xl'
							src={articleData.urlToImage}
							alt={articleData.description}
						/>
						<p className='text-dark font-medium text-base text-center max-w-2xl py-10 w-full m-auto px-3'>
							{articleData.content ?? 'Text unavailable.'}
						</p>
						<p className='text-dark w-full text-center text-lg mt-5 font-semibold'>
							{t('writtenBy')} {articleData.author}
						</p>
					</div>
				</article>
				<div className='flex mb-6'>
					<Link
						to='/'
						className={twMerge(
							'text-sm font-bold text-secondary transition ease-in-out lowercase hover:text-dark py-4 mr-5 inline-flex items-center',
							'inline-flex'
						)}
					>
						<ChevronLeftIcon className='h-6 w-5 hover:stroke-violet-500 mr-2' />
						{t('goBackToTheList')}
					</Link>
				</div>
			</Wrap>
		</div>
	);
};
