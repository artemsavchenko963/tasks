const sentence = prompt("Enter a sentence:").toLowerCase();

function countChars(str) {
    const charCount = {};
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            charCount[str[i]] = (charCount[str[i]] || 0) + 1;
        }
    }
    return charCount;
}

function countWords(str) {
    const words = {};
    const wordSplit = str.split(' ');
    for (let i = 0; i < wordSplit.length; i++) {
        if (wordSplit[i] !== ' ') {
            words[wordSplit[i]] = (words[wordSplit[i]] || 0) + 1;
        }
    }
    return words;
}

console.log(countChars(sentence));
console.log(countWords(sentence));