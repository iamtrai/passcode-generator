// Assignment code here
var generateBtn = document.querySelector("#generate");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Defines character families
var lowerCaseChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericChar = ["0","1","2","3","4","5","6","7","8","9"];
var specialChar = ["!","@","#","$","%","^","&","*","(",")","'","_","+","{","|",":","<",">","?","-","=",".","/"]

// Variable for chosen characters, will concatenate with function for confirmed charactersets
var chosenChar = [""];

// Write password to the #password input
function writePassword() {
  //Prompt for password length
  var passwordLength = prompt("How many characters long would you like your password to be? (Must be between 8 and 128 characters long)")

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters long! Try Again!");
    return;
  }

  if (isNaN(passwordLength)) {
    alert("Please enter a number!")
    return;
  };


  var yesLowCase = confirm("Click OK if you would like to include lowercase letters in your Password!")
  var yesUpCase = confirm("Click OK if you would like to include uppercase letters in your password!")
  var yesNum = confirm("Click OK if you would like to include numbers in your password!")
  var yesSpecial = confirm("Click OK if you would like to include special characters in your password!")


  //Still need to define generatePassword() function!
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


