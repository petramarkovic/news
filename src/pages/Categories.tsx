import { useLanguageContext } from '../store/languageContext';
import { Wrap } from '../components/UI/Wrap/Wrap';
import { Category } from '../components/Category';
import { useTranslation } from 'react-i18next';

export const Categories = () => {
	const { t } = useTranslation();
	const GBTitle = t('greatBritain');
	const USTitle = t('unitedStates');
	const { lang } = useLanguageContext();
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
		<div className='py-20'>
			<Wrap>
				<h1 className='mb-8 text-3xl text-secondaryDark'>
					{t('categoriesHeadline')} {lang === 'GB' ? GBTitle : USTitle}
				</h1>
				{categories.map((category, index) => (
					<Category
						category={category}
						key={index}
					/>
				))}
			</Wrap>
		</div>
	);
};
