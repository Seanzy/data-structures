var BinarySearchTree = function(value) {

  var binaryTree = {};
  
  _.extend(binaryTree, binaryTreeMethods);
  
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;
  
  return binaryTree;
  
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(insertValue) {
  var newNode = BinarySearchTree(insertValue);
  
  function searchBinaryTree(nodeObj) {
    if (insertValue > nodeObj.value && nodeObj.right === null) {
      nodeObj.right = newNode;
    } else if (insertValue < nodeObj.value && nodeObj.left === null) {
      nodeObj.left = newNode;
    } else if (insertValue > nodeObj.value && nodeObj.right !== null) {
      searchBinaryTree(nodeObj.right);
    } else if (insertValue < nodeObj.value && nodeObj.left !== null) {
      searchBinaryTree(nodeObj.left)
    }
  }
  searchBinaryTree(this);

};

binaryTreeMethods.contains = function(value) {
  // console.log("contains this:", this)
  var recursiveContains = function(node) {
    // console.log("rC, ", node);
    // debugger
    if (value === node.value) {
      return true;
    } else if (value < node.value) {
      // check if left is null
      if (node.left === null) {
        return false;
      } else {
        return recursiveContains(node.left);
      }
    } else { // if value is greater than node.value
        if (node.right === null) {
          return false;
        } else {
          return recursiveContains(node.right);
        }
    }
  };
  return recursiveContains(this);
  
};

binaryTreeMethods.depthFirstLog = function(cb) {
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//having trouble understanding where we instantiate a new node node using 'new', why, and how we refer to it