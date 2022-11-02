// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    // Your code here
    this.root = null;
  }


//       4
//     /   \
//    2     7
//   / \   / \
//  1   3 5   8

  insert(val, currentNode=this.root) {
    // Your code here
    const newNode = new TreeNode(val);

    // if there is no root node insert the new node;
    if (!currentNode) {
      this.root = newNode;
      return this;
    }

    // if the value is less than the current node's value
    // look to the left
    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = newNode;
      } else {
        return this.insert(val, currentNode.left)
      }
    }

    // if the value is greater than the current node's value
    // look to the right
    if (val > currentNode.val) {
      if (!currentNode.right) {
        currentNode.right = newNode;
      } else {
        return this.insert(val, currentNode.right)
      }
    }
  }

//       4
//     /   \
//    2     7
//   / \   / \
//  1   3 5   8

  search(val) {
    // Your code here
    if (!this.root) return false;

    let curr = this.root;

    while (curr) {
      if (val < curr.val) {
        curr = curr.left;
      } else if(val > curr.val) {
        curr = curr.right;
      } else {
        return true;
      }

    }
    return false;
  }

//       4
//     /   \
//    2     7
//   / \   / \
//  1   3 5   8

  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
}
}

module.exports = { BinarySearchTree, TreeNode };












