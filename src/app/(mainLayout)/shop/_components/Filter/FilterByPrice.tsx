"use client";
import { useState } from "react";
import ProgressBar from "./Progressbar";

const FilterByPrice = () => {
  const [progress, setProgress] = useState<number>(0);

  const increaseProgress = () => {
    setProgress((prevProgress) =>
      prevProgress < 100 ? prevProgress + 10 : 100
    );
  };

  const decreaseProgress = () => {
    setProgress((prevProgress) => (prevProgress > 0 ? prevProgress - 10 : 0));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <ProgressBar progress={progress} />
      <div className="flex mt-4 space-x-2">
        <button
          onClick={decreaseProgress}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Decrease
        </button>
        <button
          onClick={increaseProgress}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Increase
        </button>
      </div>
      <p className="mt-2">Progress: {progress}%</p>
    </div>
  );
};

export default FilterByPrice;
