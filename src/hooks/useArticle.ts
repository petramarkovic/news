import { useLanguageContext } from "../store/languageContext";
import { useParams } from "react-router-dom";
import { ArticlesArrayInterface } from "../types";
import useFetch from "./useFetch";

const useArticle = () => {
  const { lang } = useLanguageContext();
  const key = `${process.env.REACT_APP_API_KEY}`;
  const { category } = useParams();
  const formattedCategory = category || "";

  const { data, isPending, error } = useFetch<ArticlesArrayInterface>(
    `https://newsapi.org/v2/top-headlines?country=${lang}&category=${formattedCategory}&apiKey=${key}`
  );

  return { data, isPending, error, formattedCategory, lang };
};

export default useArticle;
