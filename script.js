// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordCharacterMax = 128;
var passwordCharacterMin = 1;
var lowerCaseLetters = ["a","b", "c"];
var upperCaseLetters = ["A", "B", "C"];
var numbers = ["1","2","3"];
var specialCharacters = ["!", "@", "#"];
var passwordArray =[];
var randomPasswordArray =[];
var includeLowerCase = false;
var includeUpperCase = false;
var includeSpecial = false;
var includeNumber = false;
var passwordHasLowerCase = false;
var passwordHasUpperCase = false;
var passwordHasSpecial = false;
var passwordHasNumber = false;
var finalPassword = [];




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
if(numPasswordCharacters>=passwordCharacterMin && numPasswordCharacters<=passwordCharacterMax){
  // then confirm if they want lower case characters
  lowerCaseCharacterCheck();
  // then confirm if they want special characters
  specialCharacterCheck();
  // then confirm if they want upper case letters
  upperCaseCharacterCheck();
  // then confirm if they want numerics
  numericCharacterCheck();
  // validate at least one criteria has been selected
  atLeastOneCritera();
  // add the desired password length of characters from the password array into random password array
  // verify one of each criteria is in random password array
  arrayCriteriaMatch();
  // verify password length matches requested length
  // produce password to screen
  
}
// If password length is not between 8 and 128
else {
  // prompt user to input password between 8 and 128
  alert("Please input a number between " + passwordCharacterMin +" and " + passwordCharacterMax);
}
// then confirm if they want lower case characters
function lowerCaseCharacterCheck(){
  var lowerCaseLettersWanted = confirm("Would you like lowercase characters in your password?");
    // If so, add numerics array to password array
  if(lowerCaseLettersWanted){
    for(i=0;i<lowerCaseLetters.length; i++){
      passwordArray.push(lowerCaseLetters[i]);
      includeLowerCase = true;
      }
  }
}
// then confirm if they want special characters
function specialCharacterCheck(){
  var specialCharactersWanted = confirm("Would you like special characters in your password?");
  // If so, add special characters array to password array
  if(specialCharactersWanted){
    for(j=0;j<specialCharacters.length; j++){
      passwordArray.push(specialCharacters[j]);
      includeSpecial = true;
      }
  }
}
// then confirm if they want upper case letters
function upperCaseCharacterCheck(){
  var upperCaseLettersWanted = confirm("Would you like uppercase characters in your password?");
  // If so, add upper case letters array to password array
  if(upperCaseLettersWanted){
    for(k=0;k<upperCaseLetters.length; k++){
      passwordArray.push(upperCaseLetters[k]);
      includeUpperCase = true;
      }
  }
}
// then confirm if they want numerics
function numericCharacterCheck(){
  var numbersWanted = confirm("Would you like numbers in your password?");
  // If so, add numerics array to password array
  if(numbersWanted){
    for(l=0;l<numbers.length; l++){
      passwordArray.push(numbers[l]);
      includeNumber = true;
      }
  }
}
// validate at least one criteria has been selected
function atLeastOneCritera(){
  if(includeNumber||includeSpecial||includeUpperCase||includeLowerCase){
    for(m=0;m<passwordArray.length; m++){
    // add the desired password length of characters from the password array into random password array
      randomPasswordArray.push(passwordArray[Math.floor(Math.random()*passwordArray.length)]);
    }
    for(n=0;n<((numPasswordCharacters/2)-1); n++){
      finalPassword.push(randomPasswordArray[n]);
    }
    }
  else{
    alert("Please choose at least one character type to include in your password.")
  }
  }

function arrayCriteriaMatch(){
  if(includeLowerCase){
    for(o=0; o<lowerCaseLetters.length;o++){
      if(randomPasswordArray.includes(lowerCaseLetters[o])){
        passwordHasLowerCase = true;
      }
      else{
        atLeastOneCritera();
      }
    }
  }
  if(includeUpperCase){
    for(p=0; p<upperCaseLetters.length;p++){
      if(randomPasswordArray.includes(upperCaseLetters[p])){
        passwordHasUpperCase = true;
      }
    }
  }
  if(includeSpecial){
    for(q=0; q<specialCharacters.length;q++){
      if(randomPasswordArray.includes(specialCharacters[q])){
        passwordHasSpecial = true;
      }
    }
  }
  if(includeNumber){
    for(r=0; r<numbers.length;r++){
      if(randomPasswordArray.includes(numbers[r])){
        passwordHasNumber = true;
      }
    }
  }
  }
// loop until one of each criteria is in the randomly  password array
// display the string in the box

console.log("passwordArray: " + passwordArray);
console.log("RandompasswordArray: " + randomPasswordArray);
console.log(includeLowerCase);
console.log(numPasswordCharacters);
console.log("Password has lowercase letter: " + passwordHasLowerCase);
console.log("Password has uppercase letter: " + passwordHasUpperCase);
console.log("Password has special character: " + passwordHasSpecial);
console.log("Password has number: " + passwordHasNumber);
console.log("Include Number?: " + includeNumber);
console.log("Include Uppercase: " + includeUpperCase);
console.log("Final Password: " + finalPassword);
console.log("Final Password Length: " + finalPassword.length);