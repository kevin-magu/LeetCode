function gcdOfStrings(str1, str2) {
  // Helper function to find common elements between two arrays
  function findCommonElements(arr1, arr2) {
    if(arr2.length > arr1.length){
      return arr1.filter(item => arr2.includes(item));
    }else{
      return arr2.filter(item => arr1.includes(item));
    }
  }

  // Convert the input strings to arrays
  let str1Array = str1.split('');
  let str2Array = str2.split('');

  // Find the common elements between the two arrays
  let commonElement = findCommonElements(str1Array, str2Array);

  // Output the common elements (if any) or "NO MATCH FOUND"
  let finalGcd;

  let isThereMatchingPattern = false;
  if (commonElement.length > 0) {
    isThereMatchingPattern = true;
  } else {
    isThereMatchingPattern = false;
  }

 
  let commonElement2 = []; 

  for(let i= 0; i < commonElement.length; i++){
    commonElement2.push(commonElement[i]);
  }
let finalCommonElement = [];
for(let k=0; k < commonElement.length; k++ ){
  if(commonElement2.includes(commonElement[k])){
    if(finalCommonElement.includes(commonElement[k])){

    }else{
      finalCommonElement.push(commonElement[k])
    }
  }
}

console.log("FINAL COMMON ELEMENTS ARE  " +finalCommonElement.join(''));

console.log(commonElement)
console.log(finalCommonElement)
console.log(isThereMatchingPattern)
console.log(finalCommonElement.length)

counter1 = 0;
counter2 = 0;
let finalCommonElement2 =[]

let finalCommonElementSpliced;
if(finalCommonElement.length > 1){
for(let r = 0; r < finalCommonElement.length; r++){
  let finalCommonElementFirstLetter = (finalCommonElement[r])
  let str1ArraySpliced = str1Array.splice(str1Array.indexOf(finalCommonElementFirstLetter),finalCommonElement.length);
  str1ArraySpliced.join('')
  console.log(finalCommonElement)
  finalCommonElementSpliced = finalCommonElement.splice(r, finalCommonElement.length)
  if(str1ArraySpliced.join('') == finalCommonElement.join('')){
    console.log('Match found')
  }else{
    console.log('no match found')
  }
}



  
}else{
  if(str1Array.length > str2Array.length){
    for(let k = 0; k < str2Array.length; k++){
      if(str2Array[k]==commonElement[0]){
        finalCommonElement2.push(str2Array[k])
      }
    }
  }else{
    for(let k = 0; k < str1Array.length; k++){
      if(str1Array[k]==commonElement[0]){finalCommonElementSpliced
        finalCommonElement2.push(str1Array[k])
      }
    }
  }
}
console.log(finalCommonElement2);

}

gcdOfStrings("TRDGABCD", "XYZSABCD");
