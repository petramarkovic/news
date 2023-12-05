import { Lang } from "./Lang";
import { Wrap } from "../ui/Wrap";
import { Navbar } from "./Navbar";

const Header = () => {
  return (
    <header className="bg-stone-950 shadow-sm border border-rose-100 border-opacity-10">
      <Wrap>
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-medium text-rose-200">Newz.</h1>
          <Navbar />
          <Lang />
        </div>
      </Wrap>
    </header>
  );
};

export default Header;
