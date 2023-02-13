// What's class inheritence?
//Inheritance enables you to define a class that takes all the functionality from a parent class and allows you to add more. Using class inheritance, a class can inherit all the methods and properties of another class. Inheritance is a useful feature that allows code reusability.

// What are the modifiers?
//"TypeScript provides three access modifiers to class properties and methods: private , protected , and public . The private modifier allows access within the same class. The protected modifier allows access within the same class and subclasses. The public modifier allows access from any location.
// Classes are public by default until otherwise is set."



class Vehicle {
  public drive(): void {
    console.log('chugga chugga')
  }
  
  honk(): void {
    console.log('beep')
  }
}

// by extending Vehicle Car will inherit all the props and methods of the class Vehicle.
class Car extends Vehicle {

}

const car = new Car()
car.drive()
car.honk()


const vehicle = new Vehicle()
vehicle.drive()

// modified code
// Another update

