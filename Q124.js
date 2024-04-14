"use strict";
// Question124:Create a function inside an objject that return the object's own name property using the this keyword.
const person = {
    name: "Asma",
    getName: function () {
        return this.name;
    },
};
console.log(person.getName());
