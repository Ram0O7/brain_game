"use client";
import React, { useContext } from "react";
import { levelcontext } from "./level";

export const formatTime = (timeInSeconds: number) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
};

const Clock = React.memo(() => {
  const { timer } = useContext(levelcontext);
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md text-center w-screen">
      <div className="text-sm text-gray-500 mb-2">Current Time:</div>
      <div className="text-lg font-bold">{formatTime(timer)}</div>
    </div>
  );
});

export default Clock;
