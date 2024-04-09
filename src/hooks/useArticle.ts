import { useLanguageContext } from '../store/languageContext';
import { useParams } from 'react-router-dom';
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { fetchArticles } from '../service/articlesService';
import { Page } from '../service/articlesService';


const useArticle = () => {
	const { lang } = useLanguageContext();
	const key = `${process.env.REACT_APP_API_KEY}`;
	const { category } = useParams();
	const formattedCategory = category || '';

	const { data, error, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage, status } =
		useInfiniteQuery<Page, string, InfiniteData<Page>, unknown[], number>({
			queryKey: ['articles', lang, formattedCategory, 'articles-component'],
			queryFn: ({ pageParam }) => fetchArticles({ lang, category: formattedCategory, apiKey: key, pageParam }),
			initialPageParam: 1,
			getNextPageParam: (lastPage) => lastPage.nextPage || undefined,
			staleTime: 60 * (60 * 1000)
		});

	return {
		data,
		isLoading,
		isFetchingNextPage,
		error,
		formattedCategory,
		hasNextPage,
		fetchNextPage,
		status
	};
};

export default useArticle;
