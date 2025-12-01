/**
 * @param {string} arr
 * @return {boolean}
 */
var isValid = function (arr) {
  let stack = [];
  if (arr.length % 2 !== 0) {
    return false;
  }

  for (i of arr) {
    if (i == "(" || i == "{" || i == "[") {
      stack.push(i);
      continue;
    }

    if (i == ")") {
      if (stack.pop() !== "(") {
        return false;
      }
    }
    if (i == "}") {
      if (stack.pop() !== "{") {
        return false;
      }
    }
    if (i == "]") {
      if (stack.pop() !== "[") {
        return false;
      }
    }
  }
  if (stack.length != 0) {
    return false;
  }
  return true;
};

console.log(isValid("()[]{}")); //ans: true;
console.log(isValid("([])")); //ans: true;
console.log(isValid("([)]")); //ans: false;