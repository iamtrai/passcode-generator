// Assignment code here
function generatePassword(passwordLength, yesLowCase, yesUpCase, yesNum, yesSpecial) {
  // Defines characterset arrays
  var lowcasstri = "abcdefghijklmnopqrstuvwxyz";
  var upcasstri = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numstri = "0123456789";
  var specialstri = "!@#$%^&*()_+-={}|:?-=,./";
  
  // Variable for chosen characters, will concatenate with function for confirmed charactersets
  var chosenstri = "";

  //Prompt for password length
  var passwordLength = prompt("How many characters long would you like your password to be? (Must be between 8 and 128 characters long!)")
 
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
    chosenstri += lowcasstri
  };
  if (yesUpCase) {
    chosenstri += upcasstri
  };
  if (yesNum) {
    chosenstri += numstri
  };
  if (yesSpecial) {
    chosenstri += specialstri
  };
  if (!yesLowCase && !yesUpCase && !yesNum && !yesSpecial) {
    alert("Please select at least one set of characters for your password! Try Again!")
  };

  var finalCharSet = chosenstri.split("")

  var password = "";
  for (var i=0; i<passwordLength; i++) {
  password += finalCharSet.at(Math.floor(Math.random()*finalCharSet.length))
}
return password;
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


