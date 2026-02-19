const words = prompt("Enter a sentence:");
const wordArray = words.split(" ");
const reversedArray = wordArray.reverse();
const reversedSentence = reversedArray.join(" ");

function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

function isPalindromeCheck(str) {
    if (isPalindrome(reversedSentence) == false) {
        return " - Not a palindrome";
    } else {
        return " - Is a palindrome";
    }
}
console.log(reversedSentence, isPalindromeCheck(reversedSentence));