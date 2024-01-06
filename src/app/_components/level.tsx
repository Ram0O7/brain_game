"use client";
import React, { createContext, useEffect, useState } from "react";
interface lvl {
  level: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
  timer: number;
  setst: React.Dispatch<React.SetStateAction<boolean>>;
}
export const levelcontext = createContext<lvl>({
  level: 1,
  setLevel: () => {},
  timer: 0,
  setst: () => {},
});

export const Level = ({ children }: { children: React.ReactNode }) => {
  const [level, setLevel] = useState(1);
  const [timer, setCurrentTime] = useState(0);
  const [st, setst] = useState(false);

  const updateCurrentTime = () => {
    st && setCurrentTime((prev) => prev + 1);
  };

  useEffect(() => {
    // console.log(st);
    const clockInterval = setInterval(updateCurrentTime, 1000);
    return () => clearInterval(clockInterval);
  }, [st]);

  return (
    <levelcontext.Provider value={{ level, setLevel, timer, setst }}>
      {children}
    </levelcontext.Provider>
  );
};
