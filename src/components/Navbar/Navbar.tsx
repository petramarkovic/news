import { Link } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Button } from "../UI/Button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(true);

  const menuHandler = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <nav className={`ml-auto ${isActive ? "nav--active" : ""}`}>
      <Button
        className="text-white mr-3 flex items-center lg:hidden"
        onClick={menuHandler}
      >
        <Bars3Icon className="w-5 h-5" />
      </Button>

      <ul
        className={`${
          isActive
            ? "hidden lg:flex "
            : "flex flex-col justify-center absolute top-0 left-0 z-20 h-full w-full px-5 bg-black"
        }`}
      >
        <li className="absolute top-6 right-6 lg:hidden">
          <Button onClick={menuHandler}>
            <XMarkIcon className="w-5 h-5 text-white" />
          </Button>
        </li>
        <Link to="/" className="link">
          Top News
        </Link>
        <Link to="/categories" className="link">
          Categories
        </Link>
        <Link to="/search" className="link">
          Search
          <MagnifyingGlassIcon className="h-4 w-4 ml-2 tex-white inline" />
        </Link>
      </ul>
    </nav>
  );
};
