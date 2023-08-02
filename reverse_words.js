let reverseWords = (s) => {
    let wordsWithSpaces =[]

for(let i =0; i<s.length; i++){
    wordsWithSpaces.push(s[i])
}

//find the number of spaces at the beginning
//function to remove spaces at the beginning

let noOfSpaces = 0;
    for(let i=0; i<wordsWithSpaces.length; i++){
    if(wordsWithSpaces[i] == " "){
        noOfSpaces  ++;
    }else {
        break;
    }
}
console.log("number of spaces is " + noOfSpaces)

//remove spaces at the beginning
let l = 0;
while(l<1){
    if(wordsWithSpaces[l] == " "){
        wordsWithSpaces.splice(l, noOfSpaces)
        l++;
    }else{
        break
    } 
}
 

// remove spaces from the back
let m = wordsWithSpaces.length
while(wordsWithSpaces[m-1] === " "){
    wordsWithSpaces.splice(m-1 /*m-1 is the index at which the modification will start */, 1 /*1 is the delete count*/)
    m--;
}

let cleanedWords = wordsWithSpaces;

// new task is now to identify a word
let finalWords = []
let splicedFirstWord;
//first word
for(let i =0; i< cleanedWords.length; i++){

    if(cleanedWords[i+1] == ' '){
      splicedFirstWord = cleanedWords.splice(0, i+2)
        finalWords.push(splicedFirstWord.join(''))
        break;
    }
}
console.log("Now clenaedwrods is "+ cleanedWords.join())
// get words in the middle
let r =0; 
while(r<cleanedWords.length){
    if(cleanedWords[0] == ' '){
    cleanedWords.splice(0, 1)
    }else{
        for(let i=0; i<cleanedWords.length; i++){
            if(cleanedWords[i+1] == ' '){
               splicedMiddleWord =  cleanedWords.splice(0, i+2)
               finalWords.push(splicedMiddleWord.join(''))
                break;
            }
        }
    }
    r ++
}

// get the last word
let splicedFinalWord = []
for(let i = 0; i<cleanedWords.length; i++){
    if(cleanedWords[i] !== ' ')
    splicedFinalWord.push(cleanedWords[i])
}

finalWords.push(splicedFinalWord.join(''))

console.log(cleanedWords.join(','))
console.log(finalWords.join(','))
}// end of main function
reverseWords("   hello world       general    kevin    mikins")
