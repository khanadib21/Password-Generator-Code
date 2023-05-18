
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Assignment code here
function generatePassword() {
  var length = prompt("Enter the desired length of the password. Must be a valid number between 8 and 128:");
  length = parseInt(length);

  // Check if the input is a valid number and between 8 &
  if (length < 10 || length > 128) {
    alert("Please enter a valid number between 8 and 128.");
    return '';
  }

  var lowercase = confirm("Do you want to include lowercase letters?");
  var uppercase = confirm("Do you want to include uppercase letters?");
  var numeric = confirm("Do you want to include numeric characters?");
  var specialChar = confirm("Do you want to include special characters?");

  // Check if at least one character type is selected
  if (!lowercase && !uppercase && !numeric && !specialChar) {
    alert("Please select at least one character type.");
    return '';
  }

  var characters = '';
  if (lowercase) {
    characters += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (uppercase) {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (numeric) {
    characters += '0123456789';
  }
  if (specialChar) {
    characters += '!@#$%^&*()';
  }

  var password = '';

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);