import useArticle from '../../hooks/useArticle';
import { Link } from 'react-router-dom';
import { Card, CardSkeleton } from '../Card';
import { Wrap } from '../UI/Wrap/Wrap';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { useLanguageContext } from '../../store/languageContext';
import { twMerge } from 'tailwind-merge';
import { useTranslation } from 'react-i18next';

export const Articles: React.FC = () => {
	const { lang } = useLanguageContext();
	const { data, isPending, error, formattedCategory } = useArticle();
	const { t } = useTranslation();

	const GBTitle = t('greatBritain');
	const USTitle = t('unitedStates');
	const removedArticle = t('removed');


	const skeletonArray = Array.from({ length: 9 }, (_, index) => (
		<CardSkeleton key={index} />
	));


	return (
		<div className='py-20 min-h-screen'>
			<Wrap>
				<h1 className='mb-8 text-3xl text-secondaryDark'>
					{t('mainHeadline')} {formattedCategory} {lang === 'GB' ? GBTitle : USTitle}
				</h1>
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
					{isPending && skeletonArray}
					{data && (
						<div className='flex flex-wrap w-full'>
							{data.articles
								.filter((article) => !article.title.includes(removedArticle))
								.map((article, index) => (
									<div
										key={index}
										className='sm:w-full sm:max-w-full md:w-1/2 lg:w-1/3 p-2 self-stretch'
									>
										<Link
											to='/article'
											state={article}
											className='shadow rounded-lg h-full flex flex-col hover:cursor-pointer transition '
										>
											<Card
												title={article.title}
												description={article.description}
												urlToImage={article.urlToImage}
											/>
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
