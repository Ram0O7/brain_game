"use client";
import React, { useContext } from "react";
import { levelcontext } from "./_components/level";
import Link from "next/link";

const LevelSlidingBar = () => {
  const { level, setLevel } = useContext(levelcontext);

  const handleLevelChange = (e: any) => {
    setLevel(parseInt(e.target.value, 10));
  };

  return (
    <div className="flex items-center justify-center h-screen flex-col gap-3">
      <div className="w-96 p-4 bg-white shadow-md rounded-md">
        <label
          htmlFor="levelSlider"
          className="block text-sm font-medium text-gray-700"
        >
          Level: {level}
        </label>
        <input
          type="range"
          id="levelSlider"
          name="levelSlider"
          min="1"
          max="3"
          value={level}
          onChange={handleLevelChange}
          className="mt-1 cursor-pointer"
        />
      </div>
      <Link href="/try" className=" bg-blue-600 px-5 py-2 rounded-lg">
        next
      </Link>
    </div>
  );
};
export default LevelSlidingBar;
