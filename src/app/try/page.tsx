"use client";

import React, { useState, useEffect, useContext, useCallback } from "react";
import { levelcontext } from "../_components/level";
import Clock, { formatTime } from "../_components/timer";

const MemoryGame = () => {
  const [flippedCount, setFlippedCount] = useState(0);
  const [flippedCards, setFlippedCards] = useState<Cardtype[]>([]);
  const [show, setshow] = useState(false);
  const { level, setst, timer } = useContext(levelcontext);

  // console.log(`rerendering`);
  const emojis = ["✨", "🔥", "🦊", "🤟", "🫶", "🐍"];
  interface Cardtype {
    id: number;
    emoji: string;
    isFlipped: boolean;
    isMatched: boolean;
  }
  const duplicateArray = (originalArray: string[], n: number) => {
    return Array.from({ length: n }, () => [...originalArray]).flat();
  };

  const generateCards = () => {
    const shuffledCards = duplicateArray(emojis, level + 1).sort(
      () => Math.random() - 0.5
    );

    return shuffledCards.map((emoji, index) => ({
      id: index,
      emoji,
      isFlipped: false,
      isMatched: false,
    }));
  };

  const [cards, setCards] = useState<Cardtype[]>([]);
  useEffect(() => {
    setCards(generateCards());
  }, [level]);
  useEffect(() => {
    if (flippedCount == level + 1) {
      const delay = setTimeout(() => {
        checkForMatch();
        setFlippedCount(0);
        setFlippedCards([]);
      }, 500);
      return () => clearTimeout(delay);
    }
    // console.log(cards);

    if (cards.length > 0 && cards.every((card) => card.isMatched == true)) {
      console.log("exe");

      setshow(true);
      setst(false);
    }
  }, [flippedCount, flippedCards]);

  const checkForMatch = () => {
    const allCardsMatch = flippedCards.every((card, index, array) => {
      return card.emoji === array[0].emoji;
    });
    if (allCardsMatch) {
      // Matching pair found, mark them as matched
      setCards((prevCards) =>
        prevCards.map((card) =>
          flippedCards.some((flippedCard) => flippedCard.id === card.id)
            ? { ...card, isMatched: true }
            : card
        )
      );
    } else {
      // No match, flip the cards back
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.isMatched ? card : { ...card, isFlipped: false }
        )
      );
    }
  };

  const handleCardClick = (card: Cardtype) => {
    setst(true);
    if (flippedCount < level + 1 && !card.isFlipped && !card.isMatched) {
      setCards((prevCards) =>
        prevCards.map((prevCard) =>
          prevCard.id === card.id ? { ...prevCard, isFlipped: true } : prevCard
        )
      );
      setFlippedCount(flippedCount + 1);
      setFlippedCards([...flippedCards, card]);
    }
  };

  return (
    <div className="">
      <div className=" mr-12">
        <Clock />
      </div>

      <div className="flex items-center justify-center h-screen">
        <div className=" w-auto p-4 bg-white shadow-md rounded-md">
          <div className="grid grid-cols-4 gap-4">
            {cards.map((card) => (
              <div
                key={card.id}
                className={` size-16 bg-blue-500 text-white font-bold text-2xl flex items-center justify-center cursor-pointer ${
                  card.isFlipped || card.isMatched ? " opacity-100" : ""
                }`}
                onClick={() => handleCardClick(card)}
              >
                {card.isFlipped || card.isMatched ? card.emoji : "🌟"}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        {show && (
          <>
            <h1 className=" text-white">game is over</h1>
            <h1 className=" text-white">time taken</h1>
            <h1 className=" text-white">{formatTime(timer)}</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default MemoryGame;
