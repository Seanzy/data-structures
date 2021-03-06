var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

Queue.prototype.enqueue = function(value) {
  for (var i = this.size(); i > 0; i--) {
    this.storage[i] = this.storage[i - 1];
  }
  this.storage[0] = value;
};

Queue.prototype.dequeue = function() {
  var removed = this.storage[this.size() - 1];
  
  delete this.storage[this.size() - 1]; 
  
  return removed;
};


