var Node = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

class Tree {
  constructor() {
    this.root = null;
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else if (newNode.value > node.value) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  removeNode(node, value) {
    if (node === null) return null;
    if (value > node.value) {
      node.right = this.removeNode(node.right, value);
      return node;
    } else if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        return null;
      }
      if (node.left === null && node.right) {
        return node.right;
      } else if (node.right === null && node.left) {
        return node.left;
      }
      let minNode = this.findMinNode(node.right);
      console.log(minNode);
      node.value = minNode.value;
      node.right = this.removeNode(node.right, minNode.value);
      return node;
    }
  }
  
  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  backTraverse(node, callback) {
    if (node === null) return;
    this.backTraverse(node.left, callback);
    this.backTraverse(node.right, callback);
    callback(node.value);
  }
  
  traverse(callback) {
    this.backTraverse(this.root, callback);
  }

  print(value) {
    console.log(value);
  }

  findMinNode(node) {
    if (!node) return null;
    while (node && node.left) {
      node = node.left;
    }
    return node;
  }
}
