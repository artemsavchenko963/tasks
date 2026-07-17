class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
        }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }
    
    delete(value) {
        if (!this.head) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        } 
        let current = this.head;
        while (current.next) {
            if(current.next.value === value){
                current.next = current.next.next;
                return;
            }   
            current = current.next;     
        }
    }

    find(value) {
        let current = this.head;
        while(current) {
            if(current.value === value) {
                return true;
            }
            current = current.next;
        }   
        return false;
    }

    print() {
        if(!this.head) {
            console.log("Empty");
            return;
        }

        let current = this.head;
        let result = "";

        while(current) {
            result += current.value;

            if(current.next) {
                result += ' -> ';
            }
            current = current.next;
        }
        console.log(result)
    }

    reverse() {
        let prev = null;
        let current = this.head;

        while(current != null) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        console.log(prev);
        this.head = prev;
    }
    findMiddle() {
        if (!this.head) return null;
        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.value;
    }
}


const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
console.log(list);

console.log('------find-----');
console.log("find 2:", list.find(2));
console.log("find 5:", list.find(5));
console.log('------print-----');
list.print();
console.log('------reverse-----');
list.reverse();
list.print();
console.log('------Middle-----');
console.log("Middle element:", list.findMiddle());

