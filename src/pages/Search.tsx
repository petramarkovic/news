import { useLanguageContext } from '../store/languageContext';
import { useState, useEffect } from 'react';
import { useSearch } from '../hooks/useSearch';
import { Wrap } from '../components/UI/Wrap/Wrap';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { Card, CardSkeleton } from '../components/Card';
import { Input } from '../components/Input';
import { Link, useSearchParams } from 'react-router-dom';
import Loader from '../components/UI/Loader/Loader';
import { useDebounce } from '../hooks/useDebounce';
import { useTranslation } from 'react-i18next';
import { Button } from '../components/UI/Button/Button';

export const Search: React.FC = () => {
	const { lang } = useLanguageContext();
	const { t } = useTranslation();
	const [query, setQuery] = useState('');
	const [displayedQuery, setDisplayedQuery] = useState('');
	const [searchParams, setSearchParams] = useSearchParams();
	const initialQuery = searchParams.get('query');
	const debouncedSearch = useDebounce(query);

	const GBTitle = t('greatBritain');
	const USTitle = t('unitedStates');

	const cardSkeletonArray = Array.from({ length: 9 }, (_, index) => (
		<CardSkeleton key={index} />
	));

	const { data, isLoading, error } = useSearch(debouncedSearch, lang);

	useEffect(() => {
		if (initialQuery) {
			setQuery(initialQuery);
			setDisplayedQuery(initialQuery);
		}
	}, [initialQuery]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
		setDisplayedQuery(e.target.value);
		setSearchParams({ query: e.target.value });
	};

	const handleClear = () => {
		setQuery('');
		setDisplayedQuery('');
		setSearchParams({ query: '' });
	};

	return (
		<div className='py-20 px-2'>
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
						{isLoading && <Loader />}
						{data?.articles.length && (
							<Button
								type='button'
								className='text-black flex items-center lg:ml-6 lg:mt-0 mt-3 transition hover:text-ternaryDark justify-end absolute right-4 bottom-5'
								onClick={handleClear}>
								<XMarkIcon className='w-6 h-6' />
							</Button>
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
					</div>
				) : null}
				{error && (
					<p className='text-dark text-2xl my-20 h-60 flex items-center justify-center'>
						{error.message || t('somethingWentWrong')}
					</p>
				)}
				{data?.articles.length === 0 && (
					<div className='flex flex-col'>
						<Button
							type='button'
							className='text-black flex items-center lg:ml-6 lg:mt-0 mt-3 transition hover:text-primaryDark justify-end'
							onClick={handleClear}>
							{t('clearButton')}
							<XMarkIcon className='w-5 h-5' />
						</Button>
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
