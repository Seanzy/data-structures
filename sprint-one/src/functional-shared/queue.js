var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};

  obj.storage = {};

  _.extend(obj, queueMethods);

  return obj; 
};

var queueMethods = {

  
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};

queueMethods.enqueue = function(value) {
  // var index = Object.keys(this.storage).length;
  // if (index === 0) {
  //   this.storage[index] = value;
  // } else {
  //   for (var key in this.storage) {
  //     this.storage[key] = this.storage[key + 1]
  for (var i = this.size(); i > 0; i--) {
    this.storage[i] = this.storage[i - 1];
  }   
  this.storage[0] = value;
};

queueMethods.dequeue = function() {
  var removed = this.storage[Object.keys(this.storage).length - 1];
  
  delete this.storage[Object.keys(this.storage).length - 1];
  return removed;
};