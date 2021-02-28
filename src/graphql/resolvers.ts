const games = [
  {
    id: "1",
    letters: ["a", "b", "c", "d", "e"],
    size: { x: 5, y: 3 },
    combinations: [
      { location: { x: 0, y: 0 }, word: "bed", isAcross: true },
      { location: { x: 0, y: 0 }, word: "bad", isAcross: false },
      { location: { x: 2, y: 0 }, word: "dab", isAcross: false },
      { location: { x: 2, y: 1 }, word: "ace", isAcross: true },
    ],
  },
];

const resolvers = {
  Query: {
    startGame: () => games[0],
  },
};

module.exports = resolvers;
