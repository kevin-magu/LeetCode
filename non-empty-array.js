var singleNumber = function(nums) {
myArray  = nums;
var counter = {};

for(let i = 0; i<nums.length; i++){
    let a  = 1
    counter[nums[i]] = a;
    let integer = nums[i]
    for(let j = 0; j<nums.length; j++){
        if(integer == nums[j]){
            counter[nums[i]] = a++;
        }
    }
}

for(var key in counter){
    if(counter.hasOwnProperty(key) && counter[key] === 1){
        console.log(key)
    }
}


console.log(counter);  
};
singleNumber([6]);


/**
 loop through the array and store each index as the key
 check how many times each is repetead
 display the key with only one as value
 */