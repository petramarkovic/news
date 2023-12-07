import { useState } from "react";
import { CategoryProps } from "../../types";
import { Button } from "../ui/Button";
import { Slider } from "./Slider";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useLanguageContext } from "../../store/languageContext";

export const Category: React.FC<CategoryProps> = (props) => {
  const { lang } = useLanguageContext();
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
        {props.title}
        {!isOpen ? (
          <ChevronDownIcon className="w-5 h-5" />
        ) : (
          <ChevronUpIcon className="w-5 h-5" />
        )}
      </Button>
      {isOpen && <Slider data={props.data} />}
      <Link
        className="text-neutral-800 font-bold py-2 px-4 mt-3 mx-auto rounded-lg w-1/3 flex justify-center bg-rose-100"
        to={`/categories/${props.title}`}
      >
        See all {props.title} news from {lang}
      </Link>
    </div>
  );
};
