var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not to reference your old code in writing the new style.

  var obj = {
    storage: {},
  };

  _.extend(obj, stackMethods);

  console.log(obj);
  return obj;
};

var stackMethods = {
  push: function(value) {
    if (Object.keys(this.storage).length === 0) {
      this.storage[0] = value;
    } else {
      for (var i = Object.keys(this.storage).length; i > 0; i--) {
        this.storage[i] = this.storage[i - 1];
      }

      this.storage[0] = value;
    }
  },
  pop: function() {
    var popped = this.storage[0];
      
    for (var i = 0; i < Object.keys(this.storage).length; i++) {
      this.storage[i] = this.storage[i + 1];
    }   

    //remove last item of object after shifting all items down by 1 index
    delete this.storage[Object.keys(this.storage).length - 1];

    return popped;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};






//extending properties saves you from having to add each one individually.

// var giraffeMaker = function(name, height) {
//   var newGiraffe = {};
//   newGiraffe.name = name;
//   newGiraffe.height = height;
//   newGiraffe.hunger = 10;
//   extend(newGiraffe, giraffeMaker.giraffeMethods);

//   return newGiraffe;
// };

// var extend = function(to, from) {
//   for (var key in from) {
//     to[key] = from[key];
//   }
// };

// giraffeMaker.giraffeMethods = {};


// giraffeMaker.giraffeMethods.isTallEnough = function(treeHeight) {
//     return this.height > treeHeight;
//   };

// giraffeMaker.giraffeMethods.isHungry = function() {
//   return this.hunger > 0;
// };

// giraffeMaker.giraffeMethods.say = function(option) {
//   var sentences = {
//     'greet': 'Hello, my name is ' + this.name + ', it is nice to meet you.',
//     'notHungry': this.name + ' is not hungry.',
//     'notTallEnough': this.name + ' is too short to reach the trees.',
//     'ate': 'That was delicious!'
//   };

//   return console.log(sentences[option]);
// };

// giraffeMaker.giraffeMethods.eat = function() {
//   if (this.isHungry()) {
//     this.hunger -= this.height;
//     this.say('ate');
//   } else {
//     this.say('notHungry');
//   }
// };

// giraffeMaker.giraffeMethods.browse = function() {
//   if (this.isTallEnough(2)) {
//     this.eat();
//   } else {
//     this.say('notTallEnough')
//   }
// };