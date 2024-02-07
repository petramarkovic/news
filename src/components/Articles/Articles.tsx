import { Link } from 'react-router-dom';
import { Card, CardSkeleton } from '../Card';
import { Wrap } from '../UI/Wrap/Wrap';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { useLanguageContext } from '../../store/languageContext';
import { twMerge } from 'tailwind-merge';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import useArticle from '../../hooks/useArticle';


export const Articles: React.FC = () => {
	const { lang } = useLanguageContext();
	const { data, isLoading, error, formattedCategory } = useArticle();
	const { t } = useTranslation();

	const GBTitle = t('greatBritain');
	const USTitle = t('unitedStates');
	const removedArticle = t('removed');

	const skeletonArray = Array.from({ length: 9 }, (_, index) => (
		<CardSkeleton key={index} />
	));

	const [currentDate, setCurrentDate] = useState(new Date());

	useEffect(() => {
		const calculateTimeUntilNextDay = () => {
			const now = new Date();
			const tomorrow = new Date(now);
			tomorrow.setDate(now.getDate() + 1);
			tomorrow.setHours(0, 0, 0, 0);
			return tomorrow.getTime() - now.getTime();
		};

		const updateDate = () => {
			setCurrentDate(new Date());
		};

		const intervalId = setInterval(updateDate, calculateTimeUntilNextDay());
		return () => clearInterval(intervalId);
	}, []);

	const formattedDate = currentDate.toDateString();

	return (
		<div className='py-20 min-h-screen'>
			<Wrap>
				<div className='flex justify-between items-center mb-8'>
					<h1 className='text-3xl text-secondaryDark uppercase'>
						{t('mainHeadline')} {formattedCategory}{' '}
						{lang === 'GB' ? GBTitle : USTitle}
					</h1>
					<span className='font-medium flex gap-2 items-center mr-6'>
						{formattedDate}
						<CalendarDaysIcon className='w-6 h-6'/>
					</span>
				</div>
				{formattedCategory !== '' && (
					<Link
						to='/categories'
						className={twMerge(
							`text-sm font-light text-secondary transition ease-in-out lowercase hover:text-dark py-4 mr-5 inline-flex items-center`,
							'inline-flex'
						)}
					>
						<ChevronLeftIcon className='h-6 w-5 hover:stroke-violet-500 mr-2' />
						{t('goBackButtonCategories')}
					</Link>
				)}
				<div className='flex flex-wrap'>
					{error && <p>{t('errorFetchingData')}</p>}
					{isLoading && skeletonArray}
					{data && (
						<div className='flex flex-wrap w-full'>
							{data.articles
								.filter((article) => !article.title.includes(removedArticle))
								.map((article, index) => (
									<div
										key={index}
										className='sm:w-full sm:max-w-full md:w-1/2 lg:w-1/3 p-2 self-stretch first-of-type:lg:w-full first-of-type:lg:h-40 relative first-of-type:lg:text-3xl transition hover:text-secondary'
									>
										<Link
											to='/article'
											state={article}
											className='shadow-md rounded-lg h-full flex flex-col hover:cursor-pointer transition '
										>
											<Card
												title={article.title}
												description={article.description}
												urlToImage={article.urlToImage}
											/>
											<ChevronRightIcon className='absolute bottom-5 flex justify-center items-center right-5 w-5 h-5 bg-primary rounded-full text-secondaryDark opacity-80' />
										</Link>
									</div>
								))}
						</div>
					)}
				</div>
			</Wrap>
		</div>
	);
};
