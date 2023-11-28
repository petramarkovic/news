export const CardSkeleton = () => {
  return (
    <div className="sm:w-full md:w-1/2 lg:w-1/3 p-2 self-stretch ">
      <div className="p-4 border-solid border-2 border-stone-900 rounded-lg h-full flex flex-col">
        <div className="bg-stone-600 h-6 w-full rounded-md mb-5 animate-fadeInOut infinite"></div>
        <div className="bg-stone-600 h-12 w-full rounded-md mb-6 animate-fadeInOut infinite"></div>
        <div className="bg-stone-600 h-40 w-full rounded-md animate-fadeInOut infinite"></div>
      </div>
    </div>
  );
};
