let isSubsequence =(s, t) =>{
    toRevomeSubsequentFrom = t.split('')
    toCheckIfItsSubsequent = s.split('')


    //check if each character of toCheckIfItsSubsequent is in toRevomeSubsequentFrom
let result =false
console.log(toRevomeSubsequentFrom.length)

    if(toCheckIfItsSubsequent.length == 0){
        result =true
        return true;
    }

    for(let i= 0; i< toCheckIfItsSubsequent.length; i++){
        if(toRevomeSubsequentFrom.includes(toCheckIfItsSubsequent[i])){
            result =true;
        }else{
            result =false
            break;
        }
    }

    let storeIndex =[]
    if(result==true){
    
// check index of each character from toRevomeSubsequentFrom
    for(let i=0; i<toCheckIfItsSubsequent.length; i++){
        indexofSubsequent = toRevomeSubsequentFrom.indexOf(toCheckIfItsSubsequent[i])
        storeIndex.push(indexofSubsequent)
    }
    }

    // check the order of indexes
    for(let i =0; i<storeIndex.length; i++){
        if(storeIndex[i] >= storeIndex[i+1]){
            result =false
            break;
        }else{
            result =true;
        }
    }

    console.log(storeIndex)
    console.log(result)
    console.log(toRevomeSubsequentFrom)
    console.log(toCheckIfItsSubsequent)
    return result;
}

isSubsequence('ab', 'baab')