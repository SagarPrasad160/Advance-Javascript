"use strict";

const swiss = {
  airline: "Swiss",
  code: "SW",

  book(flightNum, name) {
    console.log(
      `${name} has booked flight from ${this.airline} on FLIGHT NUMBER ${flightNum}`
    );
  },
};

swiss.book(234, "Sagar Prasad");

//Call Method

const indigo = {
  airline: "Indigo",
  code: "IND",
};

const book = swiss.book; //Copying function.

book.call(indigo, 356, "Kelly Watson");

//Apply Method.

const bookingDetails = [749, "Jim Jordan"];

book.apply(swiss, bookingDetails);

//Bind Method

const bookSW = book.bind(swiss);

bookSW(45, "Jhonny Depp");

class Student {
  constructor(name, age, phone, boardMarks) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.boardMarks = boardMarks;

    this.index = Student.prototype.index++;
  }

  isEligible() {
    if (this.boardMarks > 40) {
      console.log("is Eligble");
    } else {
      console.log("Not eligible");
    }
  }
}

Student.prototype.index = 0;

let Student1 = new Student("Yash", 24, 434214, 6);
let Student2 = new Student("Shubham", 19, 9024481, 45);
Student1.isEligible();

//console.log(Student.prototype.index);
