import { useState, useEffect } from 'react';
import { ArticleInterface } from '../../types';
import { Button } from '../UI/Button/Button';
import { Slider } from './CategorySlider';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useLanguageContext } from '../../store/languageContext';
import { CategorySkeleton } from '.';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

export interface CategoryProps {
	category: string;
}

export const Category: React.FC<CategoryProps> = ({ category }) => {
	const { lang } = useLanguageContext();
	const key = `${process.env.REACT_APP_API_KEY}`;
	const pageSize = 5;

	const [categoryData, setCategoryData] = useState<ArticleInterface[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchDataForCategory = async () => {
			const response = await fetch(
				`https://newsapi.org/v2/top-headlines?country=${lang}&category=${category}&apiKey=${key}&pageSize=${pageSize}`
			);

			if (response.ok) {
				const data = await response.json();
				setCategoryData(data.articles);
				setIsLoading(false);
			}
		};

		fetchDataForCategory();
	}, [lang, category]);

	const [isOpen, setIsOpen] = useState<boolean>(true);

	const clickHandler = () => {
		setIsOpen((prevState) => !prevState);
	};

	return (
		<>
			{isLoading && <CategorySkeleton />}
			<div className='mb-6 border-b-2 border-secondaryLight pb-6'>
				<Button
					className='flex items-center justify-between capitalize text-2xl font-medium w-full text-left text-ternaryLight py-4 rounded-lg hover:text-dark transition'
					onClick={clickHandler}
				>
					{category}
					{!isOpen ? (
						<ChevronDownIcon className='w-5 h-5' />
					) : (
						<ChevronUpIcon className='w-5 h-5' />
					)}
				</Button>
				{isOpen ? (
					categoryData?.length ? (
						<Slider articles={categoryData} />
					) : (
						<CategorySkeleton />
					)
				) : null}
				<Link
					className='text-secondaryDark font-medium py-2 px-4 mt-3 mr-auto rounded-lg flex justify-start items-center pl-0 transition hover:text-dark'
					to={`/categories/${category}`}
				>
					See all {category} news from {lang}
					<ChevronRightIcon className='w-5 h-5'/>
				</Link>
			</div>
		</>
	);
};
