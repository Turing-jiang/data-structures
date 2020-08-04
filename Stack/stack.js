class Stack {
  constructor() {
    this.items = [];
  }

  // add element to stack
  push(element) {
    this.items.push(element);
  }

  // get the last element
  peek() {
    return this.items[this.items.length - 1];
  }

  // remove the last element
  pop() {
    return this.items.pop();
  }

  // check the statck size
  size() {
    return this.items.length;
  }

  // check whether the stack is empty
  isEmpty() {
    return this.items.length === 0 ? true : false;
  }

  // get all elements
  getItems() {
    return this.items;
  }

  // remove all elements
  clear() {
    this.items = [];
  }
}
