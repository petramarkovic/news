import { useState } from "react";
import { categoryProps } from "../../types";
import { Button } from "../ui/Button";
import { Slider } from "./Slider";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

export const Category: React.FC<categoryProps> = (props) => {
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
    </div>
  );
};
