export interface ArticleInterface {
  title: string;
  urlToImage: string;
  description: string;
}

export interface RichArticleInterface extends ArticleInterface {
  content: string;
  author: string;
}
