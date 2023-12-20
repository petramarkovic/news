import { Link } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const Navbar = () => {
  return (
    <nav className="ml-auto">
      <ul className="flex">
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
