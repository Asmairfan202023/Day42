"use strict";
// Qusestion125:Modify a method in an object to use the this keyword to access another property in the same object.
const Personality = {
    name: "Asma",
    rollNo: 25,
    university: "Karachi University",
    intro: function () {
        return `My name is ${this.name} and My rollNo is ${this.rollNo} and I studied in ${this.university} .`;
    }
};
console.log(Personality.intro()); // Output: "name, roll No and unviersity name will be print."
