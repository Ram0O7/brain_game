const arr = [
  { id: 0, emoji: "🔥", isFlipped: false, isMatched: false },

  { id: 1, emoji: "🤟", isFlipped: false, isMatched: false },

  { id: 2, emoji: "🫶", isFlipped: false, isMatched: false },

  { id: 3, emoji: "🔥", isFlipped: false, isMatched: false },

  { id: 4, emoji: "🦊", isFlipped: false, isMatched: false },

  { id: 5, emoji: "🐍", isFlipped: false, isMatched: false },

  { id: 6, emoji: "✨", isFlipped: false, isMatched: false },
  { id: 7, emoji: "🐍", isFlipped: false, isMatched: false },

  { id: 8, emoji: "🦊", isFlipped: false, isMatched: false },

  { id: 9, emoji: "🫶", isFlipped: false, isMatched: false },

  { id: 10, emoji: "✨", isFlipped: false, isMatched: false },

  { id: 11, emoji: "🤟", isFlipped: false, isMatched: false },
];

if (arr.every((per) => per.isFlipped === true)) console.log("done");
