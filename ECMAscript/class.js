// Class is new feature of javascript ES6
// 1.
class Animal {
    constructor(name,voice) {
        this.name = name;
        this.voice = voice;
    }
    tostring() { console.log("name: " + this.name + " voice: " + this.voice);
    };
    speak() {
        console.log(this.name + " says: " + this.voice);
    };
}
let animal = new Animal("Dog","Bark");
animal.tostring();
animal.speak();
// 2.
let newAnimal = new Animal("Cat","Meow");
newAnimal.tostring();
newAnimal.speak();
// 2.
class Student {
    constructor(name,rollNO) {
        this.name = name;
        this.rollNo = rollNO;
    }
    toString() {
        console.log("name: " + this.name + " rollNo: " + this.rollNo);
    }
    run(){
        console.log(this.name + " is running");
    }
}

let student1 = new Student("Aditya","1");
student1.toString();
student1.run();