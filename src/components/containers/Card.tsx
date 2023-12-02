import React from "react";
import { ArticleInterface } from "../../types";

export const Card: React.FC<ArticleInterface> = (props) => {
  return (
    <div className="self-stretch h-auto flex flex-col p-5">
      <h3 className="mb-4 text-neutral-200 font-normal">{props.title}</h3>
      <div className="relative pb-56-25 mt-auto">
        <img
          src={props.urlToImage ?? "placeholder-image.jpg"}
          alt={props.description}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-lg opacity-60"
        />
      </div>
    </div>
  );
};
