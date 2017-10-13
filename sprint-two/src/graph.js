

// Instantiate a new graph
var Graph = function() {
 
 //'this' is automatically set to graph.prototype
 
 //implicitly returns 'this'
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {                                                                                     
   this[node] = [];
   
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // return this[node] === undefined; // if there is no key === node value, return false;
  return this.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this[node].length; i++) {
    this.removeEdge(this[node], this[node][i]);
  }
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this[fromNode].indexOf(toNode) > -1;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  
  if(fromNode === toNode) {
    this[toNode].push(fromNode);  
  } else {
    this[toNode].push(fromNode);
    this[fromNode].push(toNode);
  }
  
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index = this[fromNode].indexOf(toNode);
  var index2 = this[toNode].indexOf(fromNode);
  
  this[fromNode].splice(index, 1);
  
  this[toNode].splice(index2, 1);
  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this) {
    if(key.length === 1) {
      cb(key)
    }
  }
};

var graph = new Graph; 





/*
 * Complexity: What is the time complexity of the above functions?
 */


