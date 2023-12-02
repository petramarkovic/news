import { RichArticleInterface } from "..";

export interface categoryProps {
  data: {
    articles: RichArticleInterface[];
  };
  title: string;
}
