// CREATE 2 NEW VARIABLES WITH NAMES

const person1 = "Hector";
const person2 = "Sheldon";

// FUNTION THAT CHECKS WHICH NAME IS LONGER OR SHORTER
const longOrShort = function (name1, name2) {
  if (name1.length > name2.length) {
    // Checks if name1 is greater than name2
    console.log(
      `The name ${name1} is longer than ${name2} by ${
        name1.length - name2.length
      } characters`
    );
  } else if (name1.length < name2.length) {
    // Checks if name1 is less than name2
    console.log(
      `The name ${name2} is longer than ${name1} by ${
        name2.length - name1.length
      } characters`
    );
  } else {
    // Results if name1 and name2 is the same
    console.log(`${name1} and ${name2} are the same length`);
  }
};

longOrShort(person1, person2); // Calls the longOrShort function
