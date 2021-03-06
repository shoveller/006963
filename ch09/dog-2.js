const test = require('tape');
const wish = require('wish');

class Dog{
  constructor(){
    this.cost = 50;
  }
  displayPrice(){
    return `The dog costs $${this.cost}.`;
  }
};

function Cute(dog){
  const cuteDog = Object.create(dog);
  cuteDog.cost = dog.cost + 20;
  return cuteDog;
};

test("cute dog price", (assert) => {
  assert.equal((Cute(new Dog)).displayPrice(), 'The dog costs $70.');
  assert.end();
});


test("base dog price", (assert) => {
  wish((new Dog).displayPrice() 
=== 'The dog costs $50.');
  assert.pass();
  assert.end();
});
