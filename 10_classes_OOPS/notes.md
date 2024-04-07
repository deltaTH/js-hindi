## Javascript me classes hoti hai?
- hoti hai aur technically nhi bhi,
Yes, JavaScript has classes. They were introduced in ECMAScript 2015 (ES6) and are essentially templates for creating objects.
However it is important to note that Javascript is primarily a prototype-based language, and its classes are primarily syntactic sugar over existing prototype-based inheritance mechanisms. In other words it provides a more familier syntax for developers coming from class-based languages such as Java or C++, But under the hood its very different.
 Classes in JavaScript are built on prototypes but offer a cleaner and more straightforward syntax to create objects and deal with inheritance.

Here's a simple example of a JavaScript class:

```javascript
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car("Ford", 2014);
console.log("My car is " + myCar.age() + " years old.");
```

In this example, `Car` is a class with a constructor and a method named `age`. You can create new instances of the `Car` class using the `new` keyword¹². Classes are a fundamental part of modern JavaScript programming and are widely supported across all modern browsers¹.

# OOPs

## object
- collection of properties and methods
- toLowerCase

## why use OOP
- koi jarurat toh nhi thi but reduces spghatti code

## parts of OOP
- Object literal

- Constructor Functiom
- Prototypes
- Classes
- Instances(new,this)

## 4 pillars
- Abstractions (fetch)
- Encapsulation
- Inheritance
- Polymorphism