var QueueItem = function (element, priority) {
  this.element = element;
  this.priority = priority;
};

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  // add element to queue with priority
  enqueue(element, priority) {
    let queueItem = new QueueItem(element, priority);
    let added = false;
    for (let i = 0; i < this.items.length; i++) {
      if (priority > this.items[i].priority) {
        this.items.splice(i, 0, queueItem);
        added = true;
        break;
      }
    }
    if (!added) this.items.push(queueItem);
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
