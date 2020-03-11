// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordCharacterMax = 128;
var passwordCharacterMin = 8;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// TODO: Write code so the generatePassword returns a string for a password
// which meets the requirements in the instructions.
function generatePassword() {
  return "";
}
// on click, prompt user to input desired password length
var numPasswordCharacters = prompt("How many characters would you like your password to be?");
// Check if password length is between 8 and 128
// If password length is not between 8 and 128
if(numPasswordCharacters>=passwordCharacterMin && numPasswordCharacters<=passwordCharacterMax){
  lowerCaseCharacterCheck();
  specialCharacterCheck();
  upperCaseCharacterCheck();
  numericCharacterCheck();

}
else {
  // prompt user to input password between 8 and 128
  alert("Please input a number between " + passwordCharacterMin +" and " + passwordCharacterMax);
}
// then confirm if they want lower case characters
function lowerCaseCharacterCheck(){
  confirm("Would you like lowercase characters in your password?")
}
// then confirm if they want special characters
function specialCharacterCheck(){
  confirm("Would you like special characters in your password?")
}
// If so, add special characters array to password array
// then confirm if they want upper case letters
function upperCaseCharacterCheck(){
  confirm("Would you like uppercase characters in your password?")
}
// If so, add upper case letters array to password array
// then confirm if they want numerics
function numericCharacterCheck(){
  confirm("Would you like numbers in your password?")
}
// If so, add numerics array to password array
// validate at least one criteria has been selected
// add the desired password legnth of characters from the password array into random password array
// verify one of each criteria is in random password array
// loop until one of each criteria is in the randomly  password array
// display the string in the box