import { useLanguageContext } from '../store/languageContext';
import { useParams } from 'react-router-dom';
import { ArticleInterface } from '../types';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchData } from '../utils/fetchData';

interface Page {
	data: ArticleInterface[];
	currentPage: number;
	nextPage: number;
}

const useArticle = () => {
	const { lang } = useLanguageContext();
	const key = `${process.env.REACT_APP_API_KEY}`;
	const { category } = useParams();
	const formattedCategory = category || '';

	const fetchArticles = ({ pageParam }: { pageParam: number }): Promise<Page> => {
		return new Promise<Page>(async (resolve, reject) => {
			try {
				const url = `https://newsapi.org/v2/top-headlines?country=${lang}&category=${formattedCategory}&apiKey=${key}&page=${pageParam}&pageSize=6`;
				const response = await fetchData<{
					articles: ArticleInterface[];
					totalResults?: number;
				}>(url);
				

				const page: Page = {
					data: response.articles,
					currentPage: pageParam,
					nextPage: pageParam + 1
				};

				console.log(page)
				console.log(page.currentPage)
				resolve(page);
			} catch (error) {
				reject(error);
			}
		});
	};

	const { data, error, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
		useInfiniteQuery<Page, string>({
			queryKey: ['articles', lang, formattedCategory],
			queryFn: ({ pageParam }) => fetchArticles({ pageParam }),
			initialPageParam: 1,
        	getNextPageParam: (lastPage) => lastPage.nextPage
		});

	return {
		data,
		isLoading,
		isFetchingNextPage,
		error,
		formattedCategory,
		hasNextPage,
		fetchNextPage
	};
};

export default useArticle;
