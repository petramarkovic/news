import * as reactRouterDom from "react-router-dom";
import { Wrap } from "../ui/Wrap";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export const Article = () => {
  const { state } = reactRouterDom.useLocation();
  const articleData = state;

  return (
    <div className="">
      <Wrap>
        <article className="article">
          <h1 className="article__title">{articleData.title}</h1>
          <img src={articleData.urlToImage} alt={articleData.description} />
          <p>{articleData.content}</p>
        </article>
        <Link to="/" className="link link--purple inline-flex items-center">
          <ChevronLeftIcon className="h-6 w-5 hover:stroke-violet-500 mr-2" />
          Go back to the list
        </Link>
      </Wrap>
    </div>
  );
};
