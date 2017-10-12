var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);

  obj.storage = {};

  return obj;
  
};

var stackMethods = {};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
}

stackMethods.push = function(value) {
//we used this.size instead of Object.keys(this.storage).length;
  var index = this.size();
  this.storage[index] = value;
}

stackMethods.pop = function() {
  var popped = this.storage[this.size() - 1];

  delete this.storage[this.size() - 1];

  return popped;
}




// // Set up
// var Func = function() {
//   var someInstance = Object.create(funcMethods);
//   someInstance.a = 0;
//   someInstance.b = 1;

//   return someInstance;
// }

// var funcMethods = {};

// funcMethods.method1 = function() {
//   // code for method1 here...
// }

// funcMethods.method2 = function() {
//   // code for method2 here...
// }

// funcMethods.logA = function() {
//   return this.a;
// }

// // Usage
// var myFunc = Func();
// myFunc.logA(); // returns a


