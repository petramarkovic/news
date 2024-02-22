import { useLanguageContext } from '../store/languageContext';
import { Wrap } from '../components/UI/Wrap/Wrap';
import { Category } from '../components/Category';
import { useTranslation } from 'react-i18next';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import useDate from '../hooks/useDate';

export const Categories = () => {
	const { t } = useTranslation();
	const { lang } = useLanguageContext();
	const { formattedDate } = useDate();

	const GBTitle = t('greatBritain');
	const USTitle = t('unitedStates');
	const categories = [
		'business',
		'entertainment',
		'general',
		'health',
		'science',
		'sports',
		'technology'
	];

	return (
		<div className='py-20 px-2'>
			<Wrap>
				<div className='md:flex justify-between items-center mb-8 px-2'>
					<h1 className='mb-6 md:mb-0 text-3xl text-secondaryDark uppercase'>
						{t('categoriesHeadline')} {lang === 'GB' ? GBTitle : USTitle}
					</h1>
					<span className='font-medium flex gap-2 items-center mr-6'>
						{formattedDate}
						<CalendarDaysIcon className='w-6 h-6' />
					</span>
				</div>
				{categories.map((category, index) => (
					<Category category={category} key={index} />
				))}
			</Wrap>
		</div>
	);
};
