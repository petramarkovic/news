import { useLanguageContext } from '../store/languageContext';
import { useState, useEffect } from 'react';
import { useSearch } from '../hooks/useSearch';
import { Wrap } from '../components/UI/Wrap/Wrap';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { Card, CardSkeleton } from '../components/Card';
import { Input } from '../components/Input';
import { Link, useSearchParams } from 'react-router-dom';
import Loader from '../components/UI/Loader/Loader';
import { useDebounce } from '../hooks/useDebounce';
import { useTranslation } from 'react-i18next';

export const Search: React.FC = () => {
	const { lang } = useLanguageContext();
	const { t } = useTranslation();
	const [query, setQuery] = useState(() => {
		return localStorage.getItem('searchQuery') || '';
	});
	const [displayedQuery, setDisplayedQuery] = useState('');
	const [searchParams, setSearchParams] = useSearchParams();
	const initialQuery = searchParams.get('query');
	const debouncedSearch = useDebounce(query);

	const GBTitle = t('greatBritain');
	const USTitle = t('unitedStates');

	const cardSkeletonArray = Array.from({ length: 9 }, (_, index) => (
		<CardSkeleton key={index} />
	));
	
	const { data, isLoading, error } = useSearch(
		initialQuery || debouncedSearch,
		lang
	);

	useEffect(() => {
		localStorage.setItem('searchQuery', query);

		if (initialQuery) {
			setDisplayedQuery(initialQuery);
		}

		setSearchParams({ query: debouncedSearch });

	}, [debouncedSearch, searchParams, initialQuery, query, setSearchParams]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
		setDisplayedQuery(e.target.value);
	};

	const handleClear = () => {
		setQuery('');
		setDisplayedQuery('');
	};

	return (
		<div className='py-20'>
			<Wrap>
				<h1 className='mb-8 text-3xl text-secondaryDark uppercase'>
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
						{isLoading ? (
							<Loader />
						) : (
							<button
								className='absolute bottom-3 right-0 py-2 px-4 transition-all hover:opacity-70'
								type='submit'>
								<MagnifyingGlassIcon
									aria-hidden='true'
									className='w-7 h-7 text-dark'
								/>
								<span className='sr-only'>Submit</span>
							</button>
						)}
					</form>
				</div>
				{isLoading && (
					<div className='flex flex-wrap w-full'>{cardSkeletonArray}</div>
				)}
				{data?.articles.length ? (
					<div className='lg:flex lg:justify-between items-center mb-5'>
						<p className='text-dark text-2xl'>
							{t('allNewsFrom')} {lang === 'GB' ? GBTitle : USTitle}{' '}
							{t('byTerm')} '{displayedQuery}'
						</p>
						<button
							type='button'
							className='text-black flex items-center lg:ml-6 lg:mt-0 mt-3 transition hover:text-primaryDark'
							onClick={handleClear}>
							{t('clearButton')}
							<XMarkIcon className='w-5 h-5' />
						</button>
					</div>
				) : null}
				{error && (
					<p className='text-dark text-2xl my-20 h-60 flex items-center justify-center'>
						{error.message || t('somethingWentWrong')}
					</p>
				)}
				{data?.articles.length === 0 && (
					<div className='flex flex-col'>
						<button
							type='button'
							className='text-black flex items-center lg:ml-6 lg:mt-0 mt-3 transition hover:text-primaryDark justify-end'
							onClick={handleClear}>
							{t('clearButton')}
							<XMarkIcon className='w-5 h-5' />
						</button>
						<p className='text-dark text-2xl my-20 h-60 flex items-center justify-center'>
							{t('noSearchResults')} '{displayedQuery}'..
						</p>
					</div>
				)}
				<ul className='flex flex-wrap w-full'>
					{data?.articles.map((article, index) => (
						<li
							key={index}
							className='sm:w-full sm:max-w-full md:w-1/2 lg:w-1/3 p-2 self-stretch first-of-type:lg:w-full first-of-type:lg:h-40 relative first-of-type:lg:text-3xl transition hover:text-secondary'>
							<Link
								to='/article'
								state={article}
								className='shadow-md rounded-lg h-full flex flex-col hover:cursor-pointer transition '>
								<Card {...article} />
							</Link>
						</li>
					))}
				</ul>
			</Wrap>
		</div>
	);
};
