var isAnagram = function(s, t) {
    // if(s.length != t.length){
    //     return false
    // }

    // let hashS = []
    // let hashT = []

    return (s.split("").sort().join("") === t.split("").sort().join(""))

    
};

console.log(isAnagram("rat","car"));