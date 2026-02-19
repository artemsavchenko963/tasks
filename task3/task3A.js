const sentence = prompt("Enter a sentence:").toLowerCase();

function countChars(str) {
    const charCount = {};
    for (let char of str) {
        if (char !== ' ') {
            charCount[char] = (charCount[char] || 0) + 1;
        }
    }
    return charCount;
}


function countWords(str) {
    const words = {};
    const wordSplit = str.split(' ');
    for (let word of wordSplit) {
        if (word !== "") {
            words[word] = (words[word] || 0) + 1;
        }
    }
    return words;
}


console.log(countWords(sentence));
console.log(countChars(sentence));