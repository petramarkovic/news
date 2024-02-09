import { useLanguageContext } from '../store/languageContext';
import { useParams } from 'react-router-dom';
import { ArticlesArrayInterface } from '../types';
import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../utils/fetchData';

const useArticle = () => {
	const { lang } = useLanguageContext();
	const key = `${process.env.REACT_APP_API_KEY}`;
	const { category } = useParams();
	const formattedCategory = category || '';

	const { data, error, isLoading } = useQuery<ArticlesArrayInterface, string>({
		queryKey: ['articles', lang, formattedCategory],
		queryFn: () => fetchData<ArticlesArrayInterface>(`https://newsapi.org/v2/top-headlines?country=${lang}&category=${formattedCategory}&apiKey=${key}`)
	});

	return { data, isLoading, error, formattedCategory };
};

export default useArticle;
