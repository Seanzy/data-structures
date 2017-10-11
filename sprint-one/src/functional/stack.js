var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    
    //index is the number of key-value pairs in the storage object, which is the index to push value parameter into
    var index = Object.keys(storage).length;
    // console.log('index ', index);
    // console.log('storage ', storage);

    storage[index] = value;

    // console.log(storage);

    //should return the new length?
    // return storage;
  };

  someInstance.pop = function() {
    var index = Object.keys(storage).length;
    // console.log('pop ')
    
    delete storage[index];    
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
