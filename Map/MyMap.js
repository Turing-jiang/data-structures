class MyMap {
  constructor() {
    this.items = {};
  }

  has(key) {
    return this.items.hasOwnProperty(key);
  }

  set(key, value) {
    if (!this.has(key)) {
      this.items[key] = value;
      return true;
    }
    return false;
  }

  get(key) {
    if (this.has(key)) {
      return this.items[key];
    }
    return undefined;
  }

  delete(key) {
    if (this.has(key)) {
      delete this.items[key];
      return true;
    }
    return false;
  }

  getItems() {
    return this.items;
  }
}
