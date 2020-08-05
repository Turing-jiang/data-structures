class MySet {
  constructor() {
    this.items = {};
  }

  has(item) {
    return this.items.hasOwnProperty(item);
  }

  add(item) {
    if (!this.has(item)) {
      this.items[item] = item;
      return item;
    }
    return false;
  }

  remove(item) {
    if (this.has(item)) {
      delete this.items[item];
      return true;
    }
    return false;
  }

  clear() {
    this.items = {};
  }

  size() {
    let length = Object.keys(this.items).length;
    return length;
  }

  values() {
    return Object.keys(this.items);
  }
}
