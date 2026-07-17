
class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop());  
console.log(stack.peek()); 
console.log(stack.size()); 

console.log(stack.isEmpty());
console.log(stack);


// Task 2: Check for Balanced parentheses
function isBalanced(str) {
  const stack = new Stack();

  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (let char of str) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      if (stack.isEmpty()) return false;

      const top = stack.pop();

      if (top !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.isEmpty();
}

console.log("isBalanced", isBalanced("(([]){})"));  // true
console.log("isBalanced", isBalanced("(([])"));    // false