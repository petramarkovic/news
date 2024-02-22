import { useState } from 'react';
import { Button } from '../UI/Button/Button';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useLanguageContext } from '../../store/languageContext';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { useTranslation } from 'react-i18next';
import { CategoryProps } from '../../types';
import { CategoryContent } from './CategoryContent';
import useCategory from '../../hooks/useCategory';

export const Category: React.FC<CategoryProps> = ({ category }) => {
	const { lang } = useLanguageContext();
	const { t } = useTranslation();

	const GBTitle = t('greatBritain');
	const USTitle = t('unitedStates');

	const [isOpen, setIsOpen] = useState<boolean>(true);
	const { data } = useCategory(category);

	const clickHandler = () => {
		setIsOpen((prevState) => !prevState);
	};

	return (
		<>
			<div className='mb-6 border-b-2 border-secondaryLight pb-6'>
				<Button
					className='flex items-center justify-between capitalize text-2xl font-medium w-full text-left text-ternaryLight py-4 rounded-lg hover:text-dark transition'
					onClick={clickHandler}>
					{category}
					{isOpen ? (
						<ChevronUpIcon className='w-5 h-5' />
					) : (
						<ChevronDownIcon className='w-5 h-5' />
					)}
				</Button>
				{isOpen && <CategoryContent categoryData={data?.articles} />}
				<Link
					className='text-secondaryDark font-medium py-2 px-4 mt-3 mr-auto rounded-lg flex justify-start items-center pl-0 transition hover:text-dark'
					to={`/categories/${category}`}>
					See all {category} news from {lang === 'GB' ? GBTitle : USTitle}
					<ChevronRightIcon className='w-5 h-5' />
				</Link>
			</div>
		</>
	);
};
