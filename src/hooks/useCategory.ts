import { useLanguageContext } from '../store/languageContext';
import { ArticlesArrayInterface } from '../types';
import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../utils/fetchData';

const key = `${process.env.REACT_APP_API_KEY}`;

const useCategory = (category: string) => {
	const { lang } = useLanguageContext();

	const { data, error, isPending } = useQuery<ArticlesArrayInterface, string>({
		queryKey: ['articles', lang, category],
		queryFn: () => fetchData<ArticlesArrayInterface>(`https://newsapi.org/v2/top-headlines?country=${lang}&category=${category}&apiKey=${key}&pageSize=5`)
	});

	return { data, isPending, error };
};

export default useCategory;
