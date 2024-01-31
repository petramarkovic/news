import { useLanguageContext } from '../store/languageContext';
import { useState, useEffect } from 'react';
import { ArticleInterface } from '../types';

const key = `${process.env.REACT_APP_API_KEY}`;

const useCategory = (category: string) => {
	const { lang } = useLanguageContext();

	const [categoryData, setCategoryData] = useState<ArticleInterface[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchDataForCategory = async () => {
			const response = await fetch(
				`https://newsapi.org/v2/top-headlines?country=${lang}&category=${category}&apiKey=${key}&pageSize=5`
			);

			if (response.ok) {
				const data = await response.json();
				setCategoryData(data.articles);
				setIsLoading(false);
			}
		};

		fetchDataForCategory();
	}, [lang, category]);

	return { categoryData, isLoading };
};

export default useCategory;
