"use strict";

// const swiss = {
//   airline: "Swiss",
//   code: "SW",

//   book(flightNum, name) {
//     console.log(
//       `${name} has booked flight from ${this.airline} on FLIGHT NUMBER ${flightNum}`
//     );
//   },
// };

// swiss.book(234, "Sagar Prasad");

// //Call Method

// const indigo = {
//   airline: "Indigo",
//   code: "IND",
// };

// const book = swiss.book; //Copying function.

// book.call(indigo, 356, "Kelly Watson");

// //Apply Method.

// const bookingDetails = [749, "Jim Jordan"];

// book.apply(swiss, bookingDetails);

// //Bind Method

// const bookSW = book.bind(swiss);

// bookSW(45, "Jhonny Depp");

// class Student {
//   constructor(name, age, phone, boardMarks) {
//     this.name = name;
//     this.age = age;
//     this.phone = phone;
//     this.boardMarks = boardMarks;

//     this.index = Student.prototype.index++;
//   }

//   isEligible() {
//     if (this.boardMarks > 40) {
//       console.log("is Eligble");
//     } else {
//       console.log("Not eligible");
//     }
//   }
// }

// Student.prototype.index = 0;

// let Student1 = new Student("Yash", 24, 434214, 6);
// let Student2 = new Student("Shubham", 19, 9024481, 45);
// Student1.isEligible();

// //console.log(Student.prototype.index);

// setTimeout(() => console.log("timer1 expired"), 1000);

// setTimeout(() => console.log("timer2 expired"), 0);

// function x(y) {
//   console.log("inside x");

//   y();
// }

// x(function y() {
//   setTimeout(() => console.log("inside y"), 0);
// });

// document.querySelector("button").addEventListener("click", function () {
//   console.log("clicked me");
// });

//Rest and Spread Operators

const [...arr] = [1, 2, 3, 4, 5];
//console.log(arr);

const Sagar = {
  firstName: "Sagar",
  lastName: "Prasad",
  birthYear: 2000,
  getAge(currentYear) {
    return currentYear - this.birthYear;
  },
};

const Shubham = {
  firstName: "Shubham",
  lastName: "Sharma",
  birthYear: 1999,
};
//const age = Sagar.getAge(2037);

const calcAge = Sagar.getAge; //Copying method to another function.

//Setting this keyword explicitly using call method.

const res = calcAge.call(Shubham, 2023);

//Creating a Shallow copy of the object using spread operator.

const newFriend = { ...Sagar };

newFriend.firstName = "James Miller";

newFriend.birthYear = 1987;

//console.log(newFriend.getAge(2023));

//Closures

function planeBooking() {
  let noOfPlanes = 0;

  return function buy() {
    noOfPlanes++;
    console.log(noOfPlanes);
  };
}

const book = planeBooking();

book();
book();
book();
book();

//Every time we call the book function it keeps the track of the variable noOfPlanes count even when the
//is popped off from the call stack, it somehow remembers the variable enviroment of the scope or the birth place where the
// function was created which is the planeBooking function.
