const sentence = prompt("Enter a sentence:").toLowerCase();

function countChars(str) {
    const charCount = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char !== ' ') {
            charCount[char] = (charCount[char] || 0) + 1;
        }
    }
    return charCount;
}

function countWords(str) {
    const words = {};
    const wordSplit = str.split(' ');
    for (let i = 0; i < wordSplit.length; i++) {
        const word = wordSplit[i];
        if (word !== ' ') {
            words[word] = (words[word] || 0) + 1;
        }
    }
    return words;
}

console.log(countChars(sentence));
console.log(countWords(sentence))