/*
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
*/

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// 1
const events = [...new Set(gameEvents.values())];
console.log(events); // [ '⚽️ GOAL', '🔁 Substitution', '🔶 Yellow card', '🔴 Red card' ]

// 2
gameEvents.delete(64);

// 3
console.log(
  `An event happended, on average, every ${Math.floor(
    [...gameEvents.keys()].pop() / gameEvents.size
  )} minutes`
);

// 4
for (const [key, value] of gameEvents.entries()) {
  console.log(`[${key <= 45 ? "FIRST" : "SECOND"} HALF] ${key}: ${value}`);
}

gameEvents.forEach((value, key) => {
  console.log(`[${key <= 45 ? "FIRST" : "SECOND"} HALF] ${key}: ${value}`);
});
