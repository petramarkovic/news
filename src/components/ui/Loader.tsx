import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-96">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-rose-200 border-t-solid"></div>
    </div>
  );
};

export default Loader;
