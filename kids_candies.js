/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

var kidsWithCandies = function(candies, extraCandies) {
   let candiesNumberBoolean = []
   willTheKidHaveMostCandies = false;
   let greatestNumberInArray = 0;

   //finding the largest number
   for(let m = 0; m < candies.length; m++){
       for(let k =0; k<candies.length; k++){
           if(candies[m] > greatestNumberInArray){
               greatestNumberInArray = candies[m];
           }
       }
   }

   //comparison
   for(let i = 0; i < candies.length; i++){
       if((candies[i] + extraCandies) >= greatestNumberInArray){
           willTheKidHaveMostCandies = true;
           candiesNumberBoolean.push(willTheKidHaveMostCandies);
       }else{
           willTheKidHaveMostCandies = false;
           candiesNumberBoolean.push(willTheKidHaveMostCandies)
       }
   }
return candiesNumberBoolean;
};
console.log(kidsWithCandies([2,3,5,1,3], 3));