const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue(),
  dequeue: function(type){
    return this[type].dequeue()
  }
}

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))


// --------------------

module.exports = {
  get() {
    return {
      dog: pets.dogs.show(),
      cat: pets.cats.show()
    } 
    
  },

  dequeue(type) {

    pets.dequeue(type)

  }
}
