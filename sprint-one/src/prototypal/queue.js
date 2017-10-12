var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var obj = Object.create(queueMethods);

  obj.storage = {};

  return obj;
};

var queueMethods = {};

queueMethods.size = function() {
  return Object.keys(this.storage).length; 
};

queueMethods.enqueue = function(value) {
  for (var i = this.size(); i > 0; i--) {
    this.storage[i] = this.storage[i - 1];
  }
   
  this.storage[0] = value;
};

queueMethods.dequeue = function() {
  var removed = this.storage[this.size() - 1];

  delete this.storage[this.size() - 1];

  return removed; 
};

