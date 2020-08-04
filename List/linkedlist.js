var Node = function (element) {
  this.element = element;
  this.next = null;
};

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // add an element to the tail
  append(element) {
    let node = new Node(element);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  // insert an element
  insert(position, element) {
    if (position > -1 && position < this.length) {
      let node = new Node(element);
      let current = this.head;

      if (position === 0) {
        this.head = node;
        this.head.next = current;
      } else {
        let index = 0;
        let previous = null;
        while (position > index) {
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = node;
        node.next = current;
      }
      this.length++;
    }
  }

  getHead() {
    return this.head;
  }

  indexOf(element) {
    let index = 0;
    let current = this.head;
    while (index < this.length) {
      if (current.element === element) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  // remove an element with position
  removeAt(position) {
    if (position > -1 && position < this.length) {
      let current = this.head;
      if (position === 0) {
        this.head = current.next;
      } else {
        let index = 0;
        let previous = null;
        while (position > index) {
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = current.next;
      }
      this.length--;
    }
  }

  // remove an element with value
  remove(element) {
    let index = this.indexOf(element);
    if (index !== -1) {
      this.removeAt(index);
    }
  }

  isEmpty() {
    return this.length === 0 ? true : false;
  }

  size() {
    return this.length;
  }
}
