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
