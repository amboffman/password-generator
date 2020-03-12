// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordCharacterMax = 128;
var passwordCharacterMin = 1;
var lowerCaseLetters = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F","G", "H", "I", "J", "K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0", "1", "2", "3","4","5","6","7","8","9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"];
var passwordArray =[];
var randomPasswordArray =[];
var charactersAlreadyAdded = 0;
var includeLowerCase = false;
var includeUpperCase = false;
var includeSpecial = false;
var includeNumber = false;
var passwordHasLowerCase = false;
var passwordHasUpperCase = false;
var passwordHasSpecial = false;
var passwordHasNumber = false;
var numPasswordCharacters = 0;
// var arrayOfFunctions = [lowerCaseCharacterCheck(), specialCharacterCheck(), upperCaseCharacterCheck(), atLeastOneCritera(), arrayCriteriaMatch()];




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
  // reset variables with a function
  newClick();
  var userChoice = prompt("How many characters would you like your password to be?");
  numPasswordCharacters=userChoice;
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
    // verify one of each criteria is in random password array
    arrayCriteriaMatch();
    // verify password length matches requested length
    // produce password to screen
  }
  // If password length is not between 8 and 128
  else {
    // prompt user to input password between 8 and 128
    alert("Please input a number between " + passwordCharacterMin +" and " + passwordCharacterMax);
  }return (randomPasswordArray);
}
// // on click, prompt user to input desired password length
// var numPasswordCharacters = prompt("How many characters would you like your password to be?");
// // Check if password length is between 8 and 128
// if(numPasswordCharacters>=passwordCharacterMin && numPasswordCharacters<=passwordCharacterMax){
//   // then confirm if they want lower case characters
//   lowerCaseCharacterCheck();
//   // then confirm if they want special characters
//   specialCharacterCheck();
//   // then confirm if they want upper case letters
//   upperCaseCharacterCheck();
//   // then confirm if they want numerics
//   numericCharacterCheck();
//   // validate at least one criteria has been selected
//   atLeastOneCritera();
//   // verify one of each criteria is in random password array
//   arrayCriteriaMatch();
//   // verify password length matches requested length
//   // produce password to screen
  
// }
// // If password length is not between 8 and 128
// else {
//   // prompt user to input password between 8 and 128
//   alert("Please input a number between " + passwordCharacterMin +" and " + passwordCharacterMax);
// }
// then confirm if they want lower case characters
function lowerCaseCharacterCheck(){
  var lowerCaseLettersWanted = confirm("Would you like lowercase characters in your password?");
    // If so, add numerics array to password array
  if(lowerCaseLettersWanted){
    for(i=0;i<lowerCaseLetters.length; i++){
      passwordArray.push(lowerCaseLetters[i]);
      includeLowerCase = true;
    }
    randomPasswordArray.push(lowerCaseLetters[Math.floor(Math.random()*lowerCaseLetters.length)]);
      charactersAlreadyAdded++;
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
    randomPasswordArray.push(specialCharacters[Math.floor(Math.random()*specialCharacters.length)]);
      charactersAlreadyAdded++;
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
      randomPasswordArray.push(upperCaseLetters[Math.floor(Math.random()*upperCaseLetters.length)]);
      charactersAlreadyAdded++;
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
    randomPasswordArray.push(numbers[Math.floor(Math.random()*numbers.length)]);
      charactersAlreadyAdded++;
  }
}
// validate at least one criteria has been selected
function atLeastOneCritera(){
  if(includeNumber||includeSpecial||includeUpperCase||includeLowerCase){
    for(m=0;m<(numPasswordCharacters-charactersAlreadyAdded); m++){
    // add the desired password length of characters from the password array into random password array
      randomPasswordArray.push(passwordArray[Math.floor(Math.random()*passwordArray.length)]);
    }
    }
  else{
    alert("Please choose at least one character type to include in your password.")
  }
}

// check if random password array has all the wanted criteria
function arrayCriteriaMatch(){
  if(includeLowerCase){
    for(o=0; o<lowerCaseLetters.length;o++){
      if(randomPasswordArray.includes(lowerCaseLetters[o])){
        passwordHasLowerCase = true;
      }
      else{
      }
    }
  }
  if(includeUpperCase){
    for(p=0; p<upperCaseLetters.length;p++){
      if(randomPasswordArray.includes(upperCaseLetters[p])){
        passwordHasUpperCase = true;
      }
      else{
      }
    }
  }
  if(includeSpecial){
    for(q=0; q<specialCharacters.length;q++){
      if(randomPasswordArray.includes(specialCharacters[q])){
        passwordHasSpecial = true;
      }
      else{
      }
    }
  }
  if(includeNumber){
    for(r=0; r<numbers.length;r++){
      if(randomPasswordArray.includes(numbers[r])){
        passwordHasNumber = true;
      }
      else{

      }
    }
  }
  }

  function newClick(){
  generateBtn = document.querySelector("#generate");
  passwordCharacterMax = 128;
  passwordCharacterMin = 1;
  lowerCaseLetters = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  upperCaseLetters = ["A", "B", "C", "D", "E", "F","G", "H", "I", "J", "K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  numbers = ["0", "1", "2", "3","4","5","6","7","8","9"];
  specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"];
  passwordArray =[];
  randomPasswordArray =[];
  charactersAlreadyAdded = 0;
  includeLowerCase = false;
  includeUpperCase = false;
  includeSpecial = false;
  includeNumber = false;
  passwordHasLowerCase = false;
  passwordHasUpperCase = false;
  passwordHasSpecial = false;
  passwordHasNumber = false;
  numPasswordCharacters = 0;
  }
// if it doesn't have all the criteria, randomize and check again
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
console.log("Random Password Length: " + randomPasswordArray.length);
console.log(charactersAlreadyAdded);