// Question126: Explain how this keyword changes its value when used inside a nested function within a method.
const person1 = {
    name: "Asma",
    age:25,
    nestedFunction: function() {
       
      const innerArrowFunction = () => {
        console.log(this.name); // Output: "Asma"
      };
      innerArrowFunction();
      console.log(this.age);
    }
  };
  
  person1.nestedFunction();
  