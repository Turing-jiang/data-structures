class Queue {
  constructor() {
    this.items = [];
  }

  // add element to queue
  enqueue(element) {
    this.items.push(element);
  }

  // remove the first element
  dequeue() {
    return this.items.shift();
  }

  // get the first element
  fornt() {
    return this.items[0];
  }

  // check the statck size
  size() {
    return this.items.length;
  }

  // check whether the stack is empty
  isEmpty() {
    return this.items.length === 0 ? true : false;
  }
}
