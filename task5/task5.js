let numbers = [1, 2, 3, 4, 5];

//map
function thisMap(arr, func) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i]));
  }

  return result;
}

let mapped = thisMap(numbers, x => x * 2);
console.log(mapped);

//filter
function thisFilter(arr, func) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

let filtered = thisFilter(numbers, x => x > 3);
console.log(filtered);

//reduce
function thisReduce(arr, func, start) {
  let acc = start;

  for (let i = 0; i < arr.length; i++) {
    acc = func(acc, arr[i]);
  }

  return acc;
}

let reduced = thisReduce(numbers, (a, b) => a + b, 0);
console.log(reduced);



