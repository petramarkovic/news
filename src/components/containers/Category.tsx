import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { Button } from "../ui/Button";
import { useState } from "react";
import { Card } from "./Card";

type ArticleType = {
  title: string;
  content: string;
  author: string;
  urlToImage: string;
  description: string;
};

interface CategoryProps {
  data: {
    articles: ArticleType[];
  };
  title: string;
}

export const Category = ({ data, title }: CategoryProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const clickHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="mb-6">
      <Button
        className="flex items-center justify-between capitalize text-lg w-full bg-violet-200 text-left text-gray-800 p-4 font-bold mb-3 rounded-xl hover:text-white hover:bg-violet-800 transition"
        onClick={clickHandler}
      >
        {title}
        {!isOpen ? (
          <ChevronDownIcon className="w-5 h-5" />
        ) : (
          <ChevronUpIcon className="w-5 h-5" />
        )}
      </Button>
      {isOpen && <Card data={data} />}
    </div>
  );
};
