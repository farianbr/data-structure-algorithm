var twoSum = function(nums, target) {
    
    for (i in nums){
        let len = nums.length
        while(len>i){
            if(nums[i] + nums[len] == target){
                return [parseInt(i),len]
            }
            else{
                len--
            }
        }
    }
};

console.log(twoSum([3,3],6));