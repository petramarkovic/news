import { ArticlesArrayInterface } from '../types';
import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../utils/fetchData';

const key = `${process.env.REACT_APP_API_KEY}`;

export const useSearch = (query: string, lang: string) => {

	const { data, error, isLoading } = useQuery({
		queryKey: ['articles', {searchTerm: query} ],
		queryFn: () => fetchData<ArticlesArrayInterface>(`https://newsapi.org/v2/top-headlines?q=${query}&?country=${lang}&apiKey=${key}`),
		enabled: !!query
	})

	return { data, isLoading, error };
};
