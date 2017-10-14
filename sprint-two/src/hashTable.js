

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};


HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  console.log('insert key ',k ,'value ', v);
  console.log('index ', index);
  if(k === "Steven"){
    // debugger;
  }
  
  if (!Array.isArray(this._storage.get(index))) {
    var empty = [];
    this._storage.set(index, empty);
  } 
    //iterate the entire storage memory block
    this._storage.each(function(item, i, storage) {
      console.log('item ', item);
      
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
          
          console.log('i: ', i)
          if (key === k) {
            tuple[1] = v; 
          } else {
            item.push([k, v]);
            
          }
        }
        console.log('item after ', item);
      }
    });  
 
  
  console.log(this._storage.get(index));
  // this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  console.log('retrieve ', k);
  console.log(' retrieve ', this._storage.get(index));
  var bucket = this._storage.get(index);
  
  console.log(bucket[0]);
  console.log(bucket[1]);
  
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i]; 
    
    if (tuple[0] === k) {
      console.log('yayyyyyyyyyyyy ', tuple[1]);
      return tuple[1];
    }
  }
  
  return this._storage.get(index);
  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  this._storage.each(function(item, i, collection) {
    if (index === i) {
      collection.splice(i, 1);
    }
  });
};






/*
 * Complexity: What is the time complexity of the above functions?
 */


