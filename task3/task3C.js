const sentence = prompt("Enter a sentence:").toLowerCase();

function countChars(str) {
    const result = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === ' ') continue;

        let count = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[j] === char) {
                count++;
            }
        }

        result[char] = count;
    }

    return result;
}

function countWords(str) {
    const words = {};
    const wordSplit = str.split(' ');

    for (let i = 0; i < wordSplit.length; i++) {
        let word = wordSplit[i];
        if (word === ' ' || words[word]) continue;

        let count = 1;
        for (let j = i + 1; j < wordSplit.length; j++){
            if (wordSplit[j] === word) {
                count++;
            }
        }  
        words[word] = count;
    }
    return words;
}


console.log(countWords(sentence));
console.log(countChars(sentence));