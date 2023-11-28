import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { Button } from "../ui/Button";
import { useState } from "react";
import { Slider } from "./Slider";

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
    <div className="mb-6 bg-stone-900 p-4 rounded-lg">
      <Button
        className="flex items-center justify-between capitalize text-2xl font-medium w-full text-left text-neutral-50 p-4 rounded-lg hover:text-rose-400 transition"
        onClick={clickHandler}
      >
        {title}
        {!isOpen ? (
          <ChevronDownIcon className="w-5 h-5" />
        ) : (
          <ChevronUpIcon className="w-5 h-5" />
        )}
      </Button>
      {isOpen && <Slider data={data} />}
    </div>
  );
};
