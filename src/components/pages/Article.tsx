import * as reactRouterDom from "react-router-dom";
import { Link } from "react-router-dom";
import { Wrap } from "../ui/Wrap";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export const Article = () => {
  const { state } = reactRouterDom.useLocation();
  const articleData = state;

  return (
    <div className="bg-stone-950 min-h-screen">
      <Wrap>
        <article className="text-black pt-20">
          <h1 className="text-4xl text-rose-200 font-bold text-center mb-10">
            {articleData.title}
          </h1>
          <div className="lg:flex mb-10 lg:flex-wrap">
            <img
              className="object-cover max-w-md w-full m-auto rounded-lg shadow-2xl"
              src={articleData.urlToImage}
              alt={articleData.description}
            />
            <p className="text-neutral-300 font-normal text-base max-w-2xl py-10 w-full m-auto px-3">
              {articleData.content ?? "Text unavailable."}
            </p>
            <p className="text-white w-full text-center text-lg mt-5 font-semibold">
              Written by {articleData.author}
            </p>
          </div>
        </article>
        <div className="flex mb-6">
          <Link to="/" className="link inline-flex">
            <ChevronLeftIcon className="h-6 w-5 hover:stroke-violet-500 mr-2" />
            Go back to the list
          </Link>
        </div>
      </Wrap>
    </div>
  );
};
