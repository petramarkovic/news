export interface ArticleInterface {
  title: string;
  urlToImage: string;
  description: string;
  content?: string;
  author?: string;
}

export interface ArticlesArrayInterface {
  articles: ArticleInterface[];
}
