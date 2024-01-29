import { useLanguageContext } from '../store/languageContext';
import { useEffect, useState } from 'react';
import { searchNews } from '../services/NewsService';
import { Wrap } from '../components/UI/Wrap/Wrap';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { ArticlesArrayInterface } from '../types';
import { Card, CardSkeleton } from '../components/Card';
import { Input } from '../components/Input';
import { Link, useSearchParams } from 'react-router-dom';
import Loader from '../components/UI/Loader/Loader';
import { useDebounce } from '../hooks/useDebounce';
import { useTranslation } from 'react-i18next';

export const Search: React.FC = () => {
	const { lang } = useLanguageContext();
	const [query, setQuery] = useState('');
	const [displayedQuery, setDisplayedQuery] = useState('');
	const [loading, setIsLoading] = useState<boolean>(false);
	const [results, setResults] = useState<ArticlesArrayInterface[]>();
	const [isEmpty, setIsEmpty] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [searchParams, setSearchParams] = useSearchParams();
	const debouncedSearch = useDebounce(query);
	const { t } = useTranslation();

	const GBTitle = t('greatBritain');
	const USTitle = t('unitedStates');

	const cardSkeletonArray = Array.from({ length: 9 }, (_, index) => (
		<CardSkeleton key={index} />
	));

	useEffect(() => {
		const initialQuery = searchParams.get('query') ?? '';

		const handleSearch = async () => {
			try {
				const articles = await searchNews(
					initialQuery || debouncedSearch,
					lang
				);

				if (articles && articles.length === 0) {
					setIsEmpty(true);
					setResults([]);
					setDisplayedQuery(initialQuery || debouncedSearch);
					setError(null);
					return;
				}

				setResults(articles);
				setDisplayedQuery(initialQuery || debouncedSearch);
				setIsEmpty(false);
				setError(null);

			} catch (error : any) {
				setResults([]);
				setError(error?.message || 'Failed to fetch news. Please try again.');
			} finally {
				setIsLoading(false);
			}
		};

		if (initialQuery) {
			setQuery(initialQuery);
			handleSearch();
		} else if (debouncedSearch.trim() !== '') {
			setIsLoading(true);
			handleSearch();
		} else {
			setIsLoading(false);
			setIsEmpty(false);
			setResults([]);
			setError(null);
		}
	}, [debouncedSearch]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
		setIsLoading(true);
		setResults([]);
		setSearchParams({ query: e.target.value });
	};

	const handleClear = () => {
		setResults([]);
		setQuery('');
		setSearchParams('');
	};

	return (
		<div className='py-20'>
			<Wrap>
				<h1 className='mb-8 text-3xl text-secondaryDark'>
					{t('searchHeadline')} {lang === 'GB' ? GBTitle : USTitle}
				</h1>
				<div className='flex my-20 relative'>
					<form className='w-full relative'>
						<Input
							label={t('searchInputLabel')}
							value={query}
							onChange={handleInputChange}
							name='search'
							type='text'
						/>
						{loading ? (
							<Loader />
						) : (
							<button
								className='absolute bottom-3 right-0 py-2 px-4 transition-all hover:opacity-70'
								type='submit'
							>
								<MagnifyingGlassIcon
									aria-hidden='true'
									className='w-7 h-7 text-dark'
								/>
								<span className='sr-only'>Submit</span>
							</button>
						)}
					</form>
				</div>
				{loading && (
					<div className='flex flex-wrap w-full'>{cardSkeletonArray}</div>
				)}
				{results?.length ? (
					<div className='lg:flex lg:justify-between items-center mb-5'>
						<p className='text-dark text-2xl'>
							{t('allNewsFrom')} {lang === 'GB' ? GBTitle : USTitle} {t('byTerm')} '{displayedQuery}'
						</p>
						<button
							type='button'
							className='text-black flex items-center lg:ml-6 lg:mt-0 mt-3 transition hover:text-primaryDark'
							onClick={handleClear}
						>
							{t('clearButton')}
							<XMarkIcon className='w-5 h-5' />
						</button>
					</div>
				) : null}
				{error && (
					<p className='text-dark text-2xl my-20 h-60 flex items-center justify-center'>
						{t('somethingWentWrong')}
					</p>
				)}
				{isEmpty && (
					<p className='text-dark text-2xl my-20 h-60 flex items-center justify-center'>
						{t('noSearchResults')} '{displayedQuery}'..
					</p>
				)}
				<ul className='flex flex-wrap w-full'>
					{results?.map((article, index) => (
						<li
							key={index}
							className='sm:w-full sm:max-w-full md:w-1/2 lg:w-1/3 p-2 self-stretch'
						>
							<Link
								to='/article'
								state={article}
								className='shadow rounded-lg h-full flex flex-col hover:cursor-pointer transition opacity-75 hover:opacity-100'
							>
								<Card
									title={''}
									urlToImage={''}
									description={''}
									{...article}
								/>
							</Link>
						</li>
					))}
				</ul>
			</Wrap>
		</div>
	);
};
