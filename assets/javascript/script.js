// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  prompt("test");

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// pseudocoding 
// the user clicks the button which launches prompt windows
// prompt: length of the password? 8 characters to 128 characters
// prompt/confirm: lowercase? uppercase? numeric? special characters?
// look up modals to see if I can do "yes" or "no" buttons instead of confirm/cancel button
// important: at least one criteria must be selected (not sure how to make sure of this yet)
// generates password
// this is an array that loops then converts into a string
// pushes into the textarea id "password" in the HTML

// var pwSlots = [];
// var bit = ;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
var specChar = [" ", "!", "#", "$", "%", "&","(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "\\", "^", "_", "`", "{", "}", "|", "~", "\"", "\'"];


// This will push the alphanumeric characters "bit" into the array called pwSlots
// pwSlots.push(bit); 

// This will join the individual password alphanumeric characters into one solid password
// var finalPassword = pwSlots.join()

// This will put the finalPassword into the textarea id "password"
var finalPassword = document.getElementById("password");