var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};

};

//this = Object.create(Object.prototype) runs in the background of the Stack function

Stack.prototype.size = function() {
  return Object.keys(this.storage).length; 
};

Stack.prototype.push = function(value) {
  this.storage[this.size()] = value;
};

Stack.prototype.pop = function() {
  var popped = this.storage[this.size() - 1];

  delete this.storage[this.size() - 1];

  return popped;
};

// var newStack = new Stack();