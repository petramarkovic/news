import { RichArticleInterface } from "..";

export interface CategoryProps {
  data: {
    articles: RichArticleInterface[];
  };
  title: string;
}
