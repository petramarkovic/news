import { useLanguageContext } from "../store/languageContext";
import { Wrap } from "../components/UI/Wrap";
import { Category } from "../components/Category";

export const Categories = () => {
  const { lang } = useLanguageContext();
  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  return (
    <div className="bg-stone-950 py-20 min-h-screen">
      <Wrap>
        <h1 className="p-2 mb-8 text-4xl text-neutral-50 border-b-2 border-rose-400 border-opacity-10">
          Top 5 news by categories in {lang}:
        </h1>
        {categories.map((category, index) => (
          <Category category={category} key={index} />
        ))}
      </Wrap>
    </div>
  );
};
