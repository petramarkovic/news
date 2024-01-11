import { useLanguageContext } from '../store/languageContext';
import { useState } from 'react';
import { searchNews } from '../services/NewsService';
import { Wrap } from '../components/UI/Wrap/Wrap';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { ArticlesArrayInterface } from '../types';
import { Card } from '../components/Card';
import { Link } from 'react-router-dom';
import Loader from '../components/UI/Loader/Loader';

export const Search: React.FC = () => {
	const { lang } = useLanguageContext();
	const [query, setQuery] = useState('');
	const [displayedQuery, setDisplayedQuery] = useState('');
	const [loading, setIsLoading] = useState<boolean>(false);
	const [results, setResults] = useState<ArticlesArrayInterface[]>();

	const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
		setIsLoading(true);
		e.preventDefault();
		const articles = await searchNews(query, lang);
		setResults(articles);
		if (articles.length > 0) {
			setDisplayedQuery(query);
			setQuery('');
			setIsLoading(false);
		}
	};

	const handleClear = () => {
		setResults([]);
	};

	return (
		<div className='bg-stone-950 py-20 min-h-screen'>
			<Wrap>
				<h1 className='p-2 text-4xl text-neutral-50'>
					Search top news from {lang} by term:
				</h1>
				<div className='flex my-6 relative'>
					<form
						className='w-full'
						onSubmit={handleSearch}
					>
						<input
							type='text'
							name='search'
							id='search'
							placeholder='Search term...'
							className='bg-transparent border-2 border-rose-100 border-opacity-20 rounded-lg p-5 w-full text-white focus-visible:outline-none'
							value={query}
							onChange={(e) => setQuery(e.target.value)}
						/>
						<label
							htmlFor='search'
							className='sr-only'
						>
							Search news
						</label>
						<button
							className='absolute top-0 right-0 py-2 px-4 h-full transition-all hover:opacity-70'
							type='submit'
						>
							<MagnifyingGlassIcon
								aria-hidden='true'
								className='w-7 h-7 text-rose-300'
							/>
							<span className='sr-only'>Submit</span>
						</button>
					</form>
				</div>
				{loading && <Loader />}
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
