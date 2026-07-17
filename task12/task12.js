class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(value) {
        this.items.push(value);
    } //— додати в кінець

    dequeue() {
        if (this.isEmpty()) return null;
        return this.items.shift();
    } //— забрати з початку

    front() {
        if (this.isEmpty()) return null;
        return this.items[0];
    } // — отримати перший елемент


    isEmpty() {
        return this.items.length === 0;
    } //— перевірити, чи черга порожня

    size(){ 
        return this.items.length + 1;
    } //— отримати розмір черги
}    

const q = new Queue();

q.enqueue(1);
q.enqueue(1);
q.enqueue(1);

console.log("1front", q.front());
console.log("1dequeue", q.dequeue());
console.log("1size", q.size());

console.log("<<<=======================>>>")


class QueueUsingStacks {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    if (this.isEmpty()) return null;

    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2.pop();
  }

  front() {
    if (this.isEmpty()) return null;

    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2[this.stack2.length - 1];
  }

  isEmpty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }

  size() {
    return this.stack1.length + this.stack2.length;
  }
}

const qns = new QueueUsingStacks();

qns.enqueue(10);
qns.enqueue(12);
qns.enqueue(14);
qns.enqueue(18);
qns.enqueue(20);
qns.enqueue(30);

console.log("2Dequeue", qns.dequeue());
console.log("2front", qns.front());
console.log("2size", qns.size());