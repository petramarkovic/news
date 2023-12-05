import { Wrap } from "../ui/Wrap";
import { Articles } from "../containers/Articles";

export const Home = () => {
  return (
    <div className="bg-stone-950 py-20 min-h-screen">
      <Wrap>
        <Articles category="" />
      </Wrap>
    </div>
  );
};
