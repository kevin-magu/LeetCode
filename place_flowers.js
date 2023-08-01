/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  //loop throught the array
  //if the value is 0, then we can place a flower

  let newFlowerbed = [];
  //replacing 0 with 1

  let canPlantFlowers = false;
  // find the original ones
  let originalOnes = 0;
  for (let h = 0; h < flowerbed.length; h++) {
    if (flowerbed[h] == 1) {
      originalOnes++;
    }
  }

  noOfViableZeros = 0;
  for(let r = 0; r < n; r++){
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            if((flowerbed[0] ===0) && (flowerbed[i+1] ===0)){
                console.log("passed")
                flowerbed[0] =1
            }else if((flowerbed[flowerbed.length -1] === 0) && (flowerbed[flowerbed.length-2] ===0)){
                flowerbed[flowerbed.length-1] =1
            }else if(flowerbed.length == 1){
                flowerbed[i] = 1
            } else{
                 if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
                    flowerbed[i] = 1;
                  } else {
                  }
            }
          
        }
      }
  }

  let newOnes = 0;
  for (let t = 0; t < flowerbed.length; t++) {
    if (flowerbed[t] == 1) {
      newOnes++;
    }
  }

  let addedOnes = newOnes - originalOnes;

  if (addedOnes < n) {
    canPlantFlowers = false;
  } else if (addedOnes > n || addedOnes == n) {
    canPlantFlowers = true;
  }
console.log(flowerbed.join())
console.log(originalOnes)
console.log(newOnes)
console.log(addedOnes)
console.log(canPlantFlowers)
  return canPlantFlowers;
};
canPlaceFlowers([0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0], 6);
