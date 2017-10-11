var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    
    //index is the number of key-value pairs in the storage object, which is the index to push value parameter into
    var index = Object.keys(storage).length;

    storage[index] = value;

    return storage[index];

  };

  someInstance.pop = function() {
    var index = Object.keys(storage).length;
    var popped = storage[index - 1];

    delete storage[index - 1]; 

    return popped; 
       
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
