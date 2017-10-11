var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // console.log('storage ', storage)

    for (var key in storage) {
      var newKey = Number(key) + 1;
      storage[newKey] = storage[key];
    }
  
    storage[0] = value;

    // console.log('storage after ', storage);

    // return storage;

  };

  someInstance.dequeue = function() {
    var removed = storage[Object.keys(storage).length - 1];

    delete storage[Object.keys(storage).length - 1];

    return removed;
  
  };

  someInstance.size = function() {
    return Object.keys(storage).length;

  };

  return someInstance;
};
//
