const fib = 10;
const factorial = 5;

// function fibonacci(n) {
//     if (n != 0) {
//         let a = 0, b = 1

//         for(var i = 0; i < n; i++) { 
//             let num = a
//             a = b
//             b = num + b
//         }

//         return a;
//     }
// }

function fibonacci(n) {
    let startNum = [0, 1];

    for (let i = 2; i < n + 1; i++) {
        startNum.push(startNum[i - 1] + startNum [i - 2]);
    } 
    return startNum;
}

function factorialCount(n) {
    let result = 1;
    for (let i = 1; i < n + 1; i++) {
        result *= i;
    }
    return result;
}
    


console.log("Fibonacci" + " " + fib + ":", fibonacci(fib));
console.log("!" + factorial + ":" + " ", factorialCount(factorial));

