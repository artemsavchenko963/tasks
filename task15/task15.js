class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);
        
        if(this.root == null) {
            this.root = node;  
            return;
        } 

        let current = this.root;

        while(true) {
            if(value < current.value) {
                if(current.left == null) {
                    current.left = node;
                    return;
                }
                current = current.left;
            }
        
        else if(value > current.value) {
                if(current.right == null) {
                    current.right = node;
                    return;
                }
                current = current.right;
            }

            else {
                return; 
            }
        }
    }

    find(value) {
        let current = this.root;

        while(current !== null) {
            if(value < current.value) {
                current = current.left;
            } else if(value > current.value) {
                current = current.right;
            } else {
                return current;
            }
        }
        return null;
    }

    delete(value) {
    this.root = this.remove(this.root, value);
    }

    remove(node, value) {
        if (node === null) return null;

        if (value < node.value) {
            node.left = this.remove(node.left, value);
        } else if (value > node.value) {
            node.right = this.remove(node.right, value);
        } else {
            //no left child
            if (node.left === null) return node.right;

            //no right child
            if (node.right === null) return node.left;

            //both exist
            let temp = node.right;
            while (temp.left !== null) {
                temp = temp.left;
            }

            node.value = temp.value;
            node.right = this.remove(node.right, temp.value);
        }

        return node;
    }
}

const tree = new BST();

tree.insert(5);
tree.insert(3);
tree.insert(2);
tree.insert(4);
tree.insert(7);
tree.insert(6);
tree.insert(8);
tree.delete(3);

console.log("Tree:", tree)
console.log("Found node:", tree.find(6));