import useArticle from "../../hooks/useArticle";
import { Link } from "react-router-dom";
import { Card } from "../containers/Card";
import { CardSkeleton } from "../skeletons/CardSkeleton";
import { Wrap } from "../ui/Wrap";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useLanguageContext } from "../../store/languageContext";

export const Articles: React.FC = () => {
  const { lang } = useLanguageContext();
  const { data, isPending, error, formattedCategory } = useArticle();

  const GBTitle = "Great Britain";
  const USTitle = "United States";
  const removedArticle = "Removed";

  const skeletonArray = Array.from({ length: 9 }, (_, index) => (
    <CardSkeleton key={index} />
  ));

  return (
    <div className="bg-stone-950 py-20 min-h-screen">
      <Wrap>
        <h1 className="p-2 text-4xl text-neutral-50">
          Top {formattedCategory} news from {lang === "GB" ? GBTitle : USTitle}:
        </h1>
        {formattedCategory !== "" && (
          <Link to="/categories" className="link inline-flex">
            <ChevronLeftIcon className="h-6 w-5 hover:stroke-violet-500 mr-2" />
            Go back to the categories
          </Link>
        )}
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
                      className=" bg-stone-900 shadow hover:shadow-2xl rounded-lg h-full flex flex-col hover:cursor-pointer transition opacity-75 hover:opacity-100"
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
      </Wrap>
    </div>
  );
};
