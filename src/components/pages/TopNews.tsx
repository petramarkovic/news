import { Wrap } from "../ui/Wrap";
import useFetch from "../../hooks/useFetch";
import { useLanguageContext } from "../../store/languageContext";
import { Link } from "react-router-dom";
import { CardSkeleton } from "../skeletons/CardSkeleton";

type MyDataType = {
  articles: {
    title: string;
    content: string;
    author: string;
    urlToImage: string;
    description: string;
  }[];
};

export const TopNews = () => {
  const { lang } = useLanguageContext();
  const key = `${process.env.REACT_APP_API_KEY}`;
  const { data, isPending, error } = useFetch<MyDataType>(
    `https://newsapi.org/v2/top-headlines?country=${lang}&apiKey=${key}`
  );

  const GBTitle = "Great Britain";
  const USTitle = "United States";

  const removedArticle = "Removed";

  const skeletonArray = Array.from({ length: 9 }, (_, index) => (
    <CardSkeleton key={index} />
  ));

  return (
    <div className="bg-stone-950 py-20">
      <Wrap>
        <h1 className="p-2 mb-8 text-4xl text-neutral-50 border-b-2 border-rose-400 border-opacity-10">
          Top News from {lang === "GB" ? GBTitle : USTitle}:
        </h1>
        <div className="flex flex-wrap">
          {error && <p>Error fetching data</p>}
          {isPending && skeletonArray}
          {data && (
            <div className="flex flex-wrap w-full">
              {data.articles
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
                      <h2 className="text-rose-200 font-bold mb-2 text-lg">
                        {article.title}
                      </h2>
                      {article.description && (
                        <p className="my-2 text-sm font-normal text-neutral-100 truncate">
                          {article.description}
                        </p>
                      )}
                      <div className="relative pb-56-25 mt-auto w-full">
                        <img
                          className="absolute w-full h-full top-0 left-0 object-cover"
                          src={article.urlToImage ?? "placeholder-image.jpg"}
                          alt={article.description ?? "Placeholder image"}
                        />
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          )}
        </div>
      </Wrap>
    </div>
  );
};
