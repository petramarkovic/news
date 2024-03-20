import { Link } from 'react-router-dom';
import { Card, CardSkeleton } from '../Card';
import { Wrap } from '../UI/Wrap/Wrap';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { useLanguageContext } from '../../store/languageContext';
import { twMerge } from 'tailwind-merge';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import placeholderImage from '../../assets/placeholder-image.jpg';
import useDate from '../../hooks/useDate';
import useArticle from '../../hooks/useArticle';

export const Articles: React.FC = () => {
	const { lang } = useLanguageContext();
	const { data, isLoading, error, formattedCategory, hasNextPage, fetchNextPage, isFetchingNextPage } = useArticle();
	const { t } = useTranslation();
	const { formattedDate } = useDate();

	const GBTitle = t('greatBritain');
	const USTitle = t('unitedStates');
	const removedArticle = t('removed');

	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView && hasNextPage) {
			fetchNextPage();
		}
	}, [inView, hasNextPage]);

	const skeletonArray = Array.from({ length: 9 }, (_, index) => (
		<CardSkeleton key={index} />
	));

	return (
		<div className='py-20 min-h-screen'>
			<Wrap>
				<div className='md:flex justify-between items-center mb-8 px-2'>
					<h1 className='mb-6 md:mb-0 text-3xl text-secondaryDark uppercase'>
						{t('mainHeadline')} {formattedCategory}{' '}
						{lang === 'GB' ? GBTitle : USTitle}
					</h1>
					<span className='font-medium flex gap-2 items-center mr-6'>
						{formattedDate}
						<CalendarDaysIcon className='w-6 h-6' />
					</span>
				</div>
				{formattedCategory !== '' && (
					<Link
						to='/categories'
						className={twMerge(
							`text-sm font-light text-secondary transition ease-in-out lowercase hover:text-dark py-4 mr-5 inline-flex items-center`,
							'inline-flex'
						)}>
						<ChevronLeftIcon className='h-6 w-5 hover:stroke-violet-500 mr-2' />
						{t('goBackButtonCategories')}
					</Link>
				)}
				<div className='flex flex-wrap'>
					{error && <p>{t('errorFetchingData')}</p>}
					{isLoading && skeletonArray}
					{data?.pages.map((page, index) => (
						<div className='flex flex-wrap' key={index}>
							<div className='flex flex-wrap w-full' key={index}>
								{page.data
								.filter((article) => !article.title.includes(removedArticle))
								.map((article) => (
									<div
									key={article.title}
									className='sm:w-full sm:max-w-full md:w-1/2 lg:w-1/3 p-2 self-stretch transition hover:text-secondary justify-stretch relative'>
									<Link
										to='/article'
										state={article}
										className='shadow-md rounded-lg h-full flex flex-col hover:cursor-pointer transition '>
										<Card
											title={article.title}
											description={article.description}
											urlToImage={article.urlToImage || placeholderImage}
										/>
										<ChevronRightIcon className='absolute bottom-5 flex justify-center items-center right-3 w-5 h-5 bg-primary rounded-full text-secondaryDark opacity-80 bg-transparent' />
									</Link>
								</div>
								))}
							</div>
							<div ref={ref}></div>
							{isFetchingNextPage && <p>loading...</p>}
						</div>
					))}
				</div>
			</Wrap>
		</div>
	);
};
