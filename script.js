// Assignment code here
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specChar =["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

function generatePassword(){
  var pwdLength = window.prompt("How long do you want your password to be? Please enter a number between 8-128.");
    // need to validate number is between 8 and 128
  var addNumbers = window.confirm("Do you want to add numbers to your password?");
  var addSpecChar = window.confirm("Do you want to add special characters to your password?");
  var addLowCase = window.confirm("Do you want lowercase letters in your password?");
  var addUppCase = window.confirm("Do you want Uppercase letters in your password?");
  var upperLetters = [];
  var genPwd = "";

  // create an array to hold desired character options based on user input
  var pwdOptions = [];

  // conditional statements to concatenate desired character options 
  if (addNumbers) {
    pwdOptions = pwdOptions.concat(numbers);
  } 
  
  if (addSpecChar) {
    pwdOptions = pwdOptions.concat(specChar);
  }
  
  if (addLowCase) {
    pwdOptions = pwdOptions.concat(letters);
  } 

  if (addUppCase) {
    for ( let i = 0; i < letters.length; i++){
      upperLetters.push(letters[i].toUpperCase()); 
    }
    pwdOptions = pwdOptions.concat(upperLetters);
    
  }
 

  console.log(pwdOptions)



  // for (let i = 0; i < pwdLength; i++){
  //   // define and apply randomizer code to index of pwdOptions array
  // }

  // at the end of this function, return a value NOT console.log
  return genPwd;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
