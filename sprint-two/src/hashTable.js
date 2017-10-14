

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};


HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if(k === "Steven"){
    // debugger;
  }
  
  if (!Array.isArray(this._storage.get(index))) {
    var empty = [];
    this._storage.set(index, empty);
  } 
    //iterate the entire storage memory block
    this._storage.each(function(item, i, storage) {

      //check if we are at the appropriate key index in storage (the appropriate bucket)
      if(i === index) {
        if(item.length === 0) {
          item.push([k, v]);
        }
        
        //iterate through the bucket, check if passed in key exists, if so replace the value, else push the key-value tuple
        //first iteration of for loop will insert same item twice. 
        for (var i = 0; i < item.length; i++) {
          var tuple = item[i];
          var key = tuple[0];
          
          if (key === k) {
            tuple[1] = v; 
          } else {
            item.push([k, v]);
            
          }
        }
      }
    });  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i]; 
    
    if (tuple[0] === k) {

      return tuple[1];
    }
  } 
  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (k === tuple[0]) {

      bucket.splice(i, 1);
      
    }
  }
};




//refactor insert to replace memory storage loop with bucket variable
//remove the duplicate airplane thing

/*
 * Complexity: What is the time complexity of the above functions?
 insert, remove, and find are constant time on average but worst case are linear O(n)
 */


