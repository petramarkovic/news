import { useLanguageContext } from '../store/languageContext';
import { useEffect, useState } from 'react';
import { searchNews } from '../services/NewsService';
import { Wrap } from '../components/UI/Wrap/Wrap';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { ArticlesArrayInterface } from '../types';
import { Card, CardSkeleton } from '../components/Card';
import { Input } from '../components/Input';
import { Link } from 'react-router-dom';
import Loader from '../components/UI/Loader/Loader';
import { useDebounce } from '../hooks/useDebounce';

export const Search: React.FC = () => {
	const { lang } = useLanguageContext();
	const [query, setQuery] = useState('');
	const [displayedQuery, setDisplayedQuery] = useState('');
	const [loading, setIsLoading] = useState<boolean>(false);
	const [results, setResults] = useState<ArticlesArrayInterface[]>();
	const [isEmpty, setIsEmpty] = useState<boolean>(false);

	const debouncedSearch = useDebounce(query);
	
	const cardSkeletonArray = Array.from({ length: 9 }, (_, index) => (
		<CardSkeleton key={index} />
	));
		
		useEffect(() => {
			if (debouncedSearch.trim() === '') {
				setIsLoading(false);
				return;
			}

			const handleSearch = async () => {

				const articles = await searchNews(debouncedSearch, lang);

				if (articles && articles.length === 0) {
					setIsEmpty(true);
					console.log('empty');
				}

				setResults(articles);
				setIsLoading(false);
				setDisplayedQuery(debouncedSearch);
			}

		handleSearch();
	}, [debouncedSearch]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
		setIsLoading(true);
	}

	const handleClear = () => {
		setResults([]);
		setQuery('');
	};

	return (
		<div className='bg-stone-950 py-20 min-h-screen'>
			<Wrap>
				<h1 className='py-2 text-3xl text-neutral-50'>
					Search top news from {lang}
				</h1>
				<div className='flex my-6 relative'>
					<form
						className='w-full relative'
					>
						<Input label="Start typing to search news .." value={query} onChange={handleInputChange} name='search' type='text'/>
						{loading ? (
							<Loader />
						) : (
							<button
								className='absolute bottom-3 right-0 py-2 px-4 transition-all hover:opacity-70'
								type='submit'
							>
								<MagnifyingGlassIcon
									aria-hidden='true'
									className='w-7 h-7 text-rose-300'
								/>
								<span className='sr-only'>Submit</span>
							</button>
						)}
					</form>
				</div>
				{loading && (
					<div className='flex flex-wrap w-full'>{cardSkeletonArray}</div>
				)}
				{results?.length && (
					<div className='lg:flex lg:justify-between items-center mb-5'>
						<p className='text-white text-2xl'>
							All news from {lang} by term '{displayedQuery}'
						</p>
						<button
							type='button'
							className='text-white flex items-center lg:ml-6 lg:mt-0 mt-3'
							onClick={handleClear}
						>
							Clear
							<XMarkIcon className='w-5 h-5' />
						</button>
					</div>
				)}
				{isEmpty && <p className='text-white text-2xl my-20 h-60 flex items-center justify-center'>There are no results for '{displayedQuery}'..</p>}
				<ul className='flex flex-wrap w-full'>
					{results?.map((article, index) => (
						<li
							key={index}
							className='sm:w-full sm:max-w-full md:w-1/2 lg:w-1/3 self-stretch'
						>
							<Link
								to='/article'
								state={article}
								className='shadow hover:shadow-2xl rounded-lg h-full flex flex-col hover:cursor-pointer transition opacity-75 hover:opacity-100'
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
