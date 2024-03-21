/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
 
    news=s.split('')
     
    let  forwardVowel = ['a','A','e','E','i','I','o','O','u','U']
    let vowelsInS = []
    
    for(let i = 0; i < s.length; i++){
        if(forwardVowel.includes(s[i])){
            vowelsInS.push(s[i])
        }
    }
    
    let reversedVowel = vowelsInS.length;
    for(let m = 0; m < news.length; m++){
        if(vowelsInS.includes(news[m])){
            news[m] = vowelsInS[reversedVowel-1];
            reversedVowel --;
        } 
    }
    
    return news.join('')    
    };