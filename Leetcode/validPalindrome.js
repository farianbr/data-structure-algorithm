var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '')
    return s.toLowerCase()==s.split("").reverse().join("").toLowerCase()
};

console.log(isPalindrome(""));