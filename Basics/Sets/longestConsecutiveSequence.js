function longestConsecutiveSequence(arr) {

  if(arr.length === 0) return 0;

  if(arr.length === 1) return 1;

  const sequence = new Set(arr.sort((a, b) => a - b));
  let result = 1;
  let maxLength = 1;
  for (const number of sequence) {
    if (sequence.has(number + 1)) {
      result += 1;
      if (maxLength < result) {
        maxLength = result;
      }
    } else {
      result = 1;
    }
  }

  return maxLength;
}

console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2, 11, 12,13,14,15,16]));