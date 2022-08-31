// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
  var passwordLength = parseInt(prompt("Enter Password Length"))


  if (passwordLength  < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    return "The password must be between 8 and 128 characters long and must be a number.";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
