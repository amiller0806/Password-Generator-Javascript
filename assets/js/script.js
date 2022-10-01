// create array for variables, allUpper (uppercase letters), allLower (lowercase letters), numbers, & special (special characters) 
var allUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var allLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "&", "^", "?", "&", "*", "%", "^", "(", ")"];

// Retrieves the button and text elements with the specified IDs (generate for the button and password for text)
var button = document.getElementById("generate");
var text = document.getElementById("password");

// Function that returns the text content of the password, rendering as a string 
function writePassword() {
  var password = generatePassword();
  console.log(password);
  text.innerText = password;
}


function generatePassword() {
  // in JS, parsing means: Parsing means analyzing and converting a program into an internal format that a runtime environment can actually run 
  // https://developer.mozilla.org/en-US/docs/Glossary/Parse#:~:text=Parsing%20means%20analyzing%20and%20converting,HTML%20into%20a%20DOM%20tree.
  // parseInt method parses a value as a string and returns the first integer.https://www.w3schools.com/jsref/jsref_parseint.asp
  // Parses user input for password length 
  var acceptLength = parseInt(prompt("How long do you want your password? Your password must be between 8-120 characters"));
  // If statement: if the value the user enters (acceptLength) is less than 8, greater than 128, or not a number, they will receive the following return message 
  if (acceptLength < 8 || acceptLength > 128 || isNaN(acceptLength)) {
    return "Please choose a password between 8-128 characters";
  }

  var acceptChar = confirm("Do you want to use special characters in your password?");
  var acceptLowerCase = confirm("Do you want to use lower-case characters in your password?");
  var acceptUpperCase = confirm("Do you want to use upper-case characters in your password?");
  var acceptNumbers = confirm("Do you want to use numbers in your password?");

  // If statement: user decides to not use special characters, lowercase letters , uppercase letters, numbers , user will receive the following message 
  if (!acceptChar && !acceptLowerCase && !acceptUpperCase && !acceptNumbers) {
    return "Please choose at least one option";
  }
  var password = "";
  var validCharacters = []

  // Indicates that if the user confirms they want to use special characters, special characters will be "pushed" 
  // push means the confirmed characters (special characters) will be added to the end of the array of valid characters 
  if (acceptChar) {
    validCharacters.push(special);
  }


  // Indicates that if the user confirms they want to use lowercase letters, lowercase letters will be "pushed" 
  // push means the confirmed characters (lowercase letters) will be added to the end of the array of valid characters 
  if (acceptLowerCase) {
    validCharacters.push(allLower);
  }

 // Indicates that if the user confirms they want to use uppercase letters, uppercase letters will be "pushed" 
  // push means the confirmed characters (uppercase letters) will be added to the end of the validCharacters array
  if (acceptUpperCase) {
    validCharacters.push(allUpper);
  }

   // Indicates that if the user confirms they want to use numbers, numbers  will be "pushed" 
  // push means the confirmed characters (uppercase letters) will be added to the end of the validCharacters array
  if (acceptNumbers) {
    validCharacters.push(numbers);
  }
  console.log(validCharacters);


  // for loop to get all the characters of the password 
  for (let i = 0; i < acceptLength; i++) {
  
    // Math.floor returns the math.random value down to the nearest integer
    // Math.random returns a random number between 0 and 1
    // for loop that calculates the length of the valid characters in the password, as a row and column, then logs the each individual valid character 
    // in the console; develops password from these values (length plus valid characters produced in the var row & var column calculations).
    var row = Math.floor(Math.random() * validCharacters.length)
    var column = Math.floor(Math.random() * validCharacters[row].length)
    console.log(validCharacters[row][column])
    password = password + validCharacters[row][column]
  }

  // produces password in console 
  console.log(password);
  return password;
}

button.addEventListener("click", writePassword);