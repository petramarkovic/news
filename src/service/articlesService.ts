import { fetchData } from '../utils/fetchData';
import { ArticleInterface } from '../types';

export interface Page {
	data: ArticleInterface[];
	currentPage: number;
	nextPage: number;
}

export const fetchArticles = async ({
	lang,
	category,
	apiKey,
	pageParam
}: {
	lang: string;
	category: string;
	apiKey: string;
	pageParam: number;
}): Promise<Page> => {
	const url = `https://newsapi.org/v2/top-headlines?country=${lang}&category=${category}&apiKey=${apiKey}&page=${pageParam}`;
	const response = await fetchData<{
		articles: ArticleInterface[];
		totalResults?: number;
	}>(url);

	return {
		data: response.articles,
		currentPage: pageParam,
		nextPage: pageParam + 1
	};
};
