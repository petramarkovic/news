import useFetch from "../../hooks/useFetch";
import { useLanguageContext } from "../../store/languageContext";
import { Link } from "react-router-dom";
import { Card } from "../containers/Card";
import { CardSkeleton } from "../skeletons/CardSkeleton";
import { ArticlesInterface } from "../../types";
import { ArticlesProps } from "../../types";

export const Articles: React.FC<ArticlesProps> = (props) => {
  const { lang } = useLanguageContext();
  const key = `${process.env.REACT_APP_API_KEY}`;
  const { data, isPending, error } = useFetch<ArticlesInterface>(
    `https://newsapi.org/v2/top-headlines?country=${lang}&category=${props.category}&apiKey=${key}`
  );

  const GBTitle = "Great Britain";
  const USTitle = "United States";

  const removedArticle = "Removed";

  const skeletonArray = Array.from({ length: 9 }, (_, index) => (
    <CardSkeleton key={index} />
  ));

  return (
    <>
      <h1 className="p-2 mb-8 text-4xl text-neutral-50 border-b-2 border-rose-400 border-opacity-10">
        Top News from {lang === "GB" ? GBTitle : USTitle}:
      </h1>
      <div className="flex flex-wrap">
        {error && <p>Error fetching data</p>}
        {isPending && skeletonArray}
        {data && (
          <div className="flex flex-wrap w-full">
            {props.articles
              .filter((article) => !article.title.includes(removedArticle))
              .map((article, index) => (
                <div
                  key={index}
                  className="sm:w-full sm:max-w-full md:w-1/2 lg:w-1/3 p-2 self-stretch"
                >
                  <Link
                    to="/article"
                    state={article}
                    className="p-4 bg-stone-900 shadow hover:shadow-2xl rounded-lg h-full flex flex-col hover:cursor-pointer transition opacity-75 hover:opacity-100"
                  >
                    <Card
                      title={article.title}
                      description={article.description}
                      urlToImage={article.urlToImage}
                    />
                  </Link>
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};
