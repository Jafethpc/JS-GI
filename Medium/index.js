const input = prompt("What do you want to say?");

if (input == input.toUpperCase()) {
  // Checks if input is equal to uppercase
  alert("The user is shouting");
} else if (input == input.toLowerCase()) {
  //  Checks if input is equal to lowercase
  alert("The user is whispering");
} else {
  // The result was a mix of uppercase and lowercase
  alert("The user is talking normally");
}
