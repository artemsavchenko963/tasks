class HashTable {
  constructor(size = 10) {
    this.table = new Array(size);
    this.size = size;
  }

  // HASH FUNCTION
  hash(key) {
    let total = 0;

    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }

    return total % this.size;
  }

  // SET
  set(key, value) {
    const index = this.hash(key);

    if (!this.table[index]) {S
      this.table[index] = [];
    }

    for (let pair of this.table[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    this.table[index].push([key, value]);
  }

  // GET
  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (!bucket) return undefined;

    for (let pair of bucket) {
      if (pair[0] === key) {
        return pair[1];
      }
    }

    return undefined;
  }

  // REMOVE
  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (!bucket) return false;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return true;
      }
    }

    return false;
  }

  // KEYS
  keys() {
    const keysArray = [];

    for (let bucket of this.table) {
      if (bucket) {
        for (let pair of bucket) {
          keysArray.push(pair[0]);
        }
      }
    }

    return keysArray;
  }

  // VALUES
  values() {
    const valuesArray = [];

    for (let bucket of this.table) {
      if (bucket) {
        for (let pair of bucket) {
          valuesArray.push(pair[1]);
        }
      }
    }

    return valuesArray;
  }
}

const ht = new HashTable();

ht.set("apple", 5);
console.log(ht.get("apple"));

ht.set("banana", 10);
ht.set("orange", 7);
ht.set("grape", 3);
console.log(ht)

//CWF

function countWordFrequency(text) {
  const words = text.split(" ");
  const table = new HashTable();

  for (let word of words) {
    const count = table.get(word);

    if (count === undefined) {
      table.set(word, 1);
    } else {
      table.set(word, count + 1);
    }
  }

  const result = {};

  for (let key of table.keys()) {
    result[key] = table.get(key);
  }

  return result;
}

console.log(
  countWordFrequency("apple banana apple")
);

