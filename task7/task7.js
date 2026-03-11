// 7. Текстовий аналізатор

// Продовження завдання №3

// Вимоги:
////  • Функція analyzeText(text)
////  • Повертає
// {
////   //wordsCount: 120,
////   //uniqueWords: 45,
////   //topWords: [{ word: "js", count: 10 }],
////   //averageWordLength: 4.3
// }

// Умови:
//  • Ігнорувати регістр
//  • Відкинути пунктуацію
//  • Мінімальна довжина слова (наприклад, ≥ 3)

// Додатково:
//  • Окремі маленькі функції
//  • Заборонено писати все в одній функції

// const sentence = prompt("Enter a sentence:").toLowerCase();
const sentence = ("Lorem ipsum, dolor dolor sit amet consectetur adipisicing elit. Natus optio officiis culpa. Beatae nostrum dicta accusamus consequuntur, modi, dolorem facilis atque, sequi ipsa dolorum mollitia facere harum et sunt fuga    ");

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
    const wordSplit = str.trim().split(/\s+/);
    for (let i = 0; i < wordSplit.length; i++) {
        const word = wordSplit[i];
        if (word !== ' ') {
            words[word] = (words[word] || 0) + 1;
        }
    }
    return words;
}

function AVGWordLength(wordCount) {
    let length = 0;
    const words = Object.keys(wordCount);
    for(let i = 0; i < words.length; i++) {
        length += words[i].length;
    }
    return length / words.length;
}


function countWordsChars(str) {
    const result = {};
    const words = str.trim().split(/\s+/);

    for(i = 0; i < words.length; i++) {
        let word = words[i];
        if (word !== '') { 
            result[word] = word.length;
        }
    }
    return result;
}

function topWord(wordCount) {
    let top = "";
    let maxCount = 0;
    for (let word in wordCount) {
        if (wordCount[word] > maxCount) {
            maxCount = wordCount[word];
            top = word;
        }
    }
    return top;
}


function analyzeText(text) {
    const charCount = countChars(text);
    const wordCount = countWords(text);
    const wordLengths = countWordsChars(text);
    const avgWordLength = AVGWordLength(wordCount);
    const top = topWord(wordCount);
return {
        charCount,
        wordCount,
        wordLengths,
        averageWordLength: avgWordLength,
        topWords: [{ word: top, count: wordCount[top] }]
    };
}
console.log(analyzeText(sentence));