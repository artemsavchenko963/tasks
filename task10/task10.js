function memo(fn) {
    const cache = new Map();

    return function(...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

function slow(a, b) {
    const c = a * b;
    console.log(c);
    return c;
}

const fast = memo(slow);

fast(3, 4); 
fast(3, 4); 


























































