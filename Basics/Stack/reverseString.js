import Stack from "./Stack.js";


function reverseString(string) {
    const stack = new Stack()
    let reversedString = ""
    for (const char of string) {
        stack.push(char)
    }
    for (let i = 0; i < string.length; i++) {
        reversedString += stack.pop()
    }
    return reversedString
}

console.log(reverseString("Farian Bin Rahman"))