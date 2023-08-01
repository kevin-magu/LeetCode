 mergeAlternitevly = function(word1, word2){
    let word1Array = [];
    let word2Array = [];
    
    // place each character in word 1 into a single array element
    for(let i=0; i<word1.length;i++){
      word1Array.push(word1[i]) 
    }

    //place each character in word2 as a single array element 
    for(let a = 0; a< word2.length; a++){
      word2Array.push(word2[a])
    }
   
    //empty string
    let resultArray = []
   
    //test cases
    if (word1Array.length > word2Array.length) {
      for(let b = 0; b < word1Array.length; b++){
         resultArray.push(word1Array[b],word2Array[b])
      }
      
    }else if(word2Array.length > word1Array.length) {
      for(let c = 0; c < word2Array.length; c++)
      resultArray.push(word1Array[c],word2Array[c])
    }

    else if(word1Array.length == word2Array.length){
      for(let c = 0; c < word2Array.length; c++)
      resultArray.push(word1Array[c],word2Array[c])
    }
    return resultArray.join('')

    
 }    
 mergeAlternitevly("abc", "pqr")
