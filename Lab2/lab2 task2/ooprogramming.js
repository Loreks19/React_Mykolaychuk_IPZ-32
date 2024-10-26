// Task 1: Code a Person class
class Person{
    constructor(name = "Tom", age=20, energy=100){
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep(){
        this.energy += 10;

    }
    doSomethingFun(){
        this.energy -=10;
    }
}
const person1 = new Person();

person1.sleep();
person1.doSomethingFun();
// Task 2: Code a Worker class
class Worker extends Person{
    constructor(name, age, energy,xp = 0, hourlyWage = 10){
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork(){
        this.xp +=10;
    }

}
const worker1 = new Worker('John', 25, 90);

worker1.sleep();
worker1.doSomethingFun();
worker1.goToWork();
// Task 3: Code an intern object, run methods
function intern(){
    const intern = new Worker("Bob", 21, 110, 0, 10)

    intern.goToWork();

    return intern;
}
const internObj = intern();
console.log(internObj);
// Task 4: Code a manager object, methods
function manager(){
    const manager = new Worker("Alice", 30, 120, 100, 30);

    manager.doSomethingFun();

    return manager;
}
const managerObj = manager();
console.log(managerObj);