// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
   for (const item of dairy){
      console.log(item);
   }
}
logDairy();

// Task 2
const animal = {
    canJump: true
};

const bird = Object.create(animal);

bird.canFly = true;
bird.hasFeathers = true;

function birdCan(){
   for(const property of Object.keys(bird)){
      console.log(property +":" + bird[property]);
   }
}

birdCan();

// Task 3

function animalCan(){
   for(const property1 in animal){
      console.log(property1 + ": "+animal[property1]);
   }
}

animalCan();