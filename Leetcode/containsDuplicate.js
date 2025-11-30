var containsDuplicate = function(nums) {
    let uniqueArr = []
    let x = 0

    while(x < nums.length){
        if(uniqueArr.includes(nums[x])){
            return true
        }
        uniqueArr.push(nums[x])
        x++
    }
    return false
};

console.log(containsDuplicate([1,2,3,1]));