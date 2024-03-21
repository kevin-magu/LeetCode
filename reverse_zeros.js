let moveZeroes = (nums) =>{
let zerosInNums = 0
for(let i= 0; i<nums.length; i++){
    if(nums[i] === 0){
        zerosInNums ++ 
    }
}

console.log(zerosInNums)

//remove zeros
for(let i =0; i<=zerosInNums; i++){
    for(let m = 0; m<nums.length; m++){
        if(nums[m] ===0){
            console.log(nums[m] + " is a zero")
            nums.splice(m, 1)
        }
    }
}

//add zeros
for(let i =0; i<zerosInNums; i++){
    nums.push(0)
}
console.log(nums)


return nums;
}
moveZeroes([0])