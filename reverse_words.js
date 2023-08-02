let reverseWords = (s) => {
    // Trim spaces from the beginning and end of the string
    s = s.trim();

    console.log(s)
    // Split the string into words using one or more spaces as the delimiter
    let words = s.split(/\s+/);

    // Reverse the array of words
    let reversedWords = words.reverse();

    // Join the reversed words to form the final output string
    let result = reversedWords.join(' ');

    console.log(result);
    return result;
}

reverseWords("F R  I   E    N     D      ");
