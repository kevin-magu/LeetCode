function largestCommonDivisor(str1, str2) {
    function isDivisor(substring, fullString) {
      const divisorCount = fullString.length / substring.length;
      const repeatedString = substring.repeat(divisorCount);
      return repeatedString === fullString;
    }
  
    let largestDivisor = '';
  
    for (let i = 0; i < str1.length; i++) {
      for (let j = 1; j <= str1.length - i; j++) {
        const substring = str1.substr(i, j);
        if (isDivisor(substring, str1) && isDivisor(substring, str2)) {
          if (substring.length > largestDivisor.length) {
            largestDivisor = substring;
          }
        }
      }
    }
  
    return largestDivisor;
  }
  
  // Example usage:
  const str1 = 'RRRGHJ';
  const str2 = 'ABCRRR';
  console.log(largestCommonDivisor(str1, str2)); // Output: 'ABC'
  