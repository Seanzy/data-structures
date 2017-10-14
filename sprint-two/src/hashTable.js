

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};


HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  console.log('insert key ',k ,'value ', v);
  console.log('index ', index);
  
  if (!Array.isArray(this._storage.get(index))) {
    this._storage.set(index, []);
  } 
    this._storage.each(function(item, i, storage) {
      console.log('item ', item);
      item.push([k, v]);
      console.log('item after ', item);
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


