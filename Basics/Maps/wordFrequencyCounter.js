function wordFrequencyCounter(string) {
  const formattedString = string
    .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "")
    .toLowerCase();
  let words = formattedString.split(" ");

  const freqMap = new Map();

  for (const word of words) {
    if (freqMap.has(word)) {
      const freq = freqMap.get(word) + 1;
      freqMap.set(word, freq);
    } else {
      freqMap.set(word, 1);
    }
  }

  console.log(freqMap);
}

wordFrequencyCounter("This is a test A input. Hi!");
