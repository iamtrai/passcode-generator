// Assignment code here


//Prompt for password length
function generatePassword(passwordLength, yesLowCase, yesUpCase, yesNum, yesSpecial) {
  // Defines characterset arrays
  var lowerCaseChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numericChar = ["0","1","2","3","4","5","6","7","8","9"];
  var specialChar = ["!","@","#","$","%","^","&","*","(",")","'","_","+","{","|",":","<",">","?","-","=",".","/"]

  // Variable for chosen characters, will concatenate with function for confirmed charactersets
  var chosenChar = [];

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

  if (yesLowCase) {
    chosenChar.push(lowerCaseChar)
  };
  if (yesUpCase) {
    chosenChar.push(upperCaseChar)
  };
  if (yesNum) {
    chosenChar.push(numericChar)
  };
  if (yesSpecial) {
    chosenChar.push(specialChar)
  };
  if (!yesLowCase && !yesLowCase && !yesNum && !yesSpecial) {
    alert("Please select at least one set of characters for your password! Try Again!")
  };

  console.log(chosenChar)
  // for (var i=0, i < passwordLength, i++) {
  //   password.concat(chosenChar.at(math.floor(math.random()*chosenChar.length)))
  // }
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  //Still need to define generatePassword() function!
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// hypothetical for loop for generating password
/* for (var i=0, i < passwordLength, i++) {
  password.concat(chosenChar.At(Math.floor(Math.random()*chosenChar.Length)));
}
*/
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


