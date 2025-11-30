var isValid = function (s) {
  let arr = s.split("");
  let stack = []
  if (arr.length % 2 !== 0) {
    return false;
  }

  for (i of arr) {
    if (i == "(" || i == "{" || i == "[") {
      stack.push(i);
    }

    if (i == ")") {
        lastKey = stack.pop()
      if (lastKey !== '(') {
        return false
      }
    }
    if (i == "}") {
        lastKey = stack.pop()
      if (lastKey !== '{') {
        return false
      }
    }
    if (i == "]") {
        lastKey = stack.pop()
      if (lastKey !== '[') {
        return false
      }
    }


  }
  if(stack.length != 0){
    return false
  }
  return true;
};

console.log(isValid("{[]}"));
console.log(isValid("()[]{}"));
console.log(isValid("[[[]"));
