import { CategorySkeleton } from '.';
import { Slider } from './CategorySlider';
import { ArticleInterface } from '../../types';

interface CategoryDataProps {
	categoryData: ArticleInterface[];
}

export const CategoryContent = ({ categoryData } : CategoryDataProps) => {
	if (categoryData?.length) {
		return <Slider articles={categoryData} />;
	}

	return <CategorySkeleton />;
};