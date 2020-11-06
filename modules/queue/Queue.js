class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}


class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);
  
    if (this.first === null) {
      this.first = node;
    }
  
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  
  }

  show() {
    return this.first.value;
  }

  all() {
    let all = [];
    let node = this.first;
    all.push(node.value);
    node = node.next;
    while (node) {
      all.push(node.value);
      node = node.next;
    }
    
    return all;
  }
}



module.exports = Queue
