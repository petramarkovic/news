import { Wrap } from "../ui/Wrap";
import { Navbar } from "./Navbar";
import { LanguageSwitcher } from "./LanguageSwitcher";

const Header = () => {
  return (
    <header className="bg-stone-950 shadow-sm">
      <Wrap>
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-medium text-emerald-200">Newz.</h1>
          <Navbar />
          <LanguageSwitcher />
        </div>
      </Wrap>
    </header>
  );
};

export default Header;
