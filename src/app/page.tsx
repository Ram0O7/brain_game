"use client";
import React, { useContext } from "react";
import { levelcontext } from "./_components/level";
import Link from "next/link";

const LevelSlidingBar = () => {
  const { level, setLevel } = useContext(levelcontext);
  // console.log(`level value ${level} from main page.tsx`);
  // console.log(typeof level);

  const handleLevelChange = (e: any) => {
    setLevel(parseInt(e.target.value, 10));
    // console.log(`level value ${level} from main page.tsx after change`);
  };

  return (
    <div className="flex items-center justify-center h-screen">
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
          className="mt-1"
        />
      </div>
      <Link href="/try" className=" bg-blue-600 p-1 rounded-lg">
        next
      </Link>
    </div>
  );
};
export default LevelSlidingBar;
