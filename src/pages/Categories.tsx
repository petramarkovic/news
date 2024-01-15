import { useLanguageContext } from '../store/languageContext';
import { Wrap } from '../components/UI/Wrap/Wrap';
import { Category } from '../components/Category';

export const Categories = () => {
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
					Top 5 news by categories in {lang}
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
