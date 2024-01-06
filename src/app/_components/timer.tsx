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

const Clock = () => {
  const { timer } = useContext(levelcontext);
  return (
    <div>
      <div>Current Time:</div>
      <div>{formatTime(timer)}</div>
    </div>
  );
};

export default Clock;
