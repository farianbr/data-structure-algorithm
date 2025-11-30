function anagramGrouping(words) {
  const GroupedWords = new Map();

  for (const word of words) {
    const sortedWord = word.split("").sort().join("");
    if (GroupedWords.has(sortedWord)) {
      const prevWords = GroupedWords.get(sortedWord);
      GroupedWords.set(sortedWord, [...prevWords, word]);
    } else {
      GroupedWords.set(sortedWord, [word]);
    }
  }

  return Array.from(GroupedWords.values());
}

console.log(anagramGrouping(["cat", "act", "dog", "god", "tac"]));
