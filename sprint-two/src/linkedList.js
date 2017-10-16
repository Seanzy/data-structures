var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    
    if (list.head === null) {
      list.head = newNode;
    } 
    
    if (list.head !== null) {
      list.head.next = newNode;
      
    }
    
    list.tail = newNode;
  
  };

  list.removeHead = function() {
    var removed = list.head;
    
    list.head = list.head.next;
    
    return removed.value;
    
  };

  list.contains = function(target) {
  
  //recursive contains() function 
  var checkTarget = function(LLobj, target) {
    if (LLobj.value === target) {
      return true;
    } 
    
    if (LLobj.next === null) {
      return false;
    } else {
      return checkTarget(LLobj.next, target);
    }
    
  };

  return checkTarget(list.head, target);
  };
  
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
