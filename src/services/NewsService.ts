import { ArticlesArrayInterface } from "../types";

export const searchNews = async (
  query: string,
  lang: string
): Promise<ArticlesArrayInterface[]> => {
  const key = `${process.env.REACT_APP_API_KEY}`;
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?q=${query}&?country=${lang}&apiKey=${key}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch news.");
    }
    const data: { articles: ArticlesArrayInterface[] } = await response.json();
    return data.articles;
  } catch (error) {
    console.error(error);
    return [];
  }
};
