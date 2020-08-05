class HashTable {
  constructor() {
    this.items = [];
  }
  loseloseHashCode(key) {
    let hashCode = [...key].reduce(
      (totoal, current) => totoal + current.charCodeAt(),
      0
    );
    return hashCode % 37;
  }

  put(key, value) {
    let position = this.loseloseHashCode(key);
    this.items[position] = value;
  }

  remove(key) {
    let position = this.loseloseHashCode(key);
    if (position > -1 && position < this.items.length) {
      this.items[position] = undefined;
      return true;
    }
    return false;
  }

  get(key) {
    let position = this.loseloseHashCode(key);
    if (position > -1 && position < this.items.length) {
      return this.items[position];
    }
    return undefined;
  }
}
