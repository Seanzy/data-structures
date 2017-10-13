var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = new Tree(value); 
  
  this.children.push(child); 
  
  
  
};

treeMethods.contains = function(target) {
  
  var containsTarget = false;
  
  var checkTarget = function(tree) { 
    if (tree.value === target) {
      containsTarget = true;
    }
    
    if (tree.children.length > 0) {
      for (var i = 0; i < tree.children.length; i++) {
        checkTarget(tree.children[i]);
      }
    }
  };
  
  checkTarget(this);

  return containsTarget;
};








/*
 * Complexity: What is the time complexity of the above functions?
 */
