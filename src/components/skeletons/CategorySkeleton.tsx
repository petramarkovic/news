export const CategorySkeleton = () => {
  return (
    <div className="w-full p-2 rounded-lg bg-stone-900 mb-3">
      <div className="p-4 rounded-lg h-full flex justify-between flex-wrap">
        <div className="w-full bg-stone-600 h-10 p-3 rounded-lg mx-3 animate-fadeInOut infinite mb-2"></div>
        <div className="p-3 animate-fadeInOut infinite w-1/3">
          <div className="bg-stone-700 h-6 rounded-lg mb-5 animate-fadeInOut infinite"></div>
          <div className="bg-stone-700 h-12 rounded-lg mb-6 animate-fadeInOut infinite"></div>
          <div className="bg-stone-700 h-40 rounded-lg animate-fadeInOut infinite"></div>
        </div>
        <div className="p-3 animate-fadeInOut infinite w-1/3">
          <div className="bg-stone-700 h-6 rounded-lg mb-5 animate-fadeInOut infinite"></div>
          <div className="bg-stone-700 h-12 rounded-lg mb-6 animate-fadeInOut infinite"></div>
          <div className="bg-stone-700 h-40 rounded-lg animate-fadeInOut infinite"></div>
        </div>
        <div className="p-3 animate-fadeInOut infinite w-1/3">
          <div className="bg-stone-700 h-6 rounded-lg mb-5 animate-fadeInOut infinite"></div>
          <div className="bg-stone-700 h-12 rounded-lg mb-6 animate-fadeInOut infinite"></div>
          <div className="bg-stone-700 h-40 rounded-lg animate-fadeInOut infinite"></div>
        </div>
      </div>
    </div>
  );
};
