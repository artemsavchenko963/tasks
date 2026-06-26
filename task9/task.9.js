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

//                 --  
//some             ||                             
// every           ||
// find            ||
// flatDepth      \  /
//                 \/ 
                            
                        
function thisSome(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    let result = func(arr[i])

    if (result === true) {
      return true
    }
  } 
  return false
}

let some = thisSome(numbers, x => x > 3);
console.log("--- some:", some); 



function thisEvery(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) === false) {
      return false
    }
  }
  return true
}

let every = thisEvery(numbers, x => x > 3)
console.log("--- every:",every)



function thisFind(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    let result = func(arr[i])

    if (result === true) {
      return arr[i]
    }
  }
  return undefined
}

let find = thisFind(numbers, x => x > 3)
console.log("--- find:", find)


let n = [1, [2, [3, 4]], 5];
function thisFlatDepth(arr, depth) {
  let result = arr;

  for (let d = 0; d < depth; d++) {
    let temp = [];

    for (let i = 0; i < result.length; i++) {
      if (Array.isArray(result[i])) {
        for (let j = 0; j < result[i].length; j++) {
          temp.push(result[i][j]);
        }
      } else {
        temp.push(result[i]);
      }
    }

    result = temp;
  }

  return result;
}

let flat = thisFlatDepth(n, 2);
console.log("--- flattened:", flat)