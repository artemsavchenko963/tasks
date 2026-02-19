const words = prompt("Enter a sentence:");
const wordArray = words.split(" ");
const reversedArray = wordArray.reverse();
const reversedSentence = reversedArray.join(" ");

function isPalindrome(str) {
    const cleanStr = str.replaceAll(' ', '');
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}

function isPalindromeCheck(str) {
    if (isPalindrome(reversedSentence) == false) {
        return " - Not a palindrome";
    } else {
        return " - Is a palindrome";
    }
}
console.log(reversedSentence, isPalindromeCheck(reversedSentence));