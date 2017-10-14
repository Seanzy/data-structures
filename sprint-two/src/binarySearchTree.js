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
  var recursiveContains = function(node) {
    if (value === node.value || value === node.left.value || value === node.right.value) {
      return true;
    } else if (node.left === null && node.right === null) {
      return false;
    } else if (node.left !== null && value < node.value) {
      
    }
  }
  
};

binaryTreeMethods.depthFirstLog = function(cb) {
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//having trouble understanding where we instantiate a new node node using 'new', why, and how we refer to it