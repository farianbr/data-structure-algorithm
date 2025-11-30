function symmetricDifference(arrA, arrB) {
    setA = new Set(arrA)
    setB = new Set(arrB)

    for (const number of setA) {
        if(setB.has(number)){
            setB.delete(number)
        }
        else{
            setB.add(number)
        }
    }
    return Array.from(setB).sort()
}


console.log(symmetricDifference([1,2,3,4,5],[5,4,3,2,1]))