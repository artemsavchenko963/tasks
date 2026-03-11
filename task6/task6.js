const calculator = {
    history: [],

    calculation(expression) {
        try {
            // Очищення пробілів та перевірка на недозволені символи
            const sanitizedExpression = expression.replace(/[^-+*/().0-9\s]/g, '');
            
            if (!sanitizedExpression) throw new Error("Empty expression");
                const result = new Function(`return ${sanitizedExpression}`)();

            if (!isFinite(result)) {
                throw new Error("Division by zero or infinity");
            }

            this.addToHistory(expression, result);
            return result;

        } catch (error) {
            return `Error: ${error.message}`;
        }
    },

    addToHistory(input, result) {
        this.history.push({ input, result });
    },

    getHistory() {
        return [...this.history];
    }
};

console.log(calculator.calculation("2 + 3 * 4"));
console.log(calculator.calculation("2 * 4 - 3"));
console.log(calculator.calculation("3 * 4 / 2"));
console.log(calculator.calculation("(10 + 10) * 10"));
console.log("History log:", calculator.getHistory());