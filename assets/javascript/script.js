// Assignment Code

var generateBtn = document.querySelector("#generate");

function writePassword() {

  var roughDraftPW = [];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M","N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specChar = ["!", "#", "$", "%", "&","(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "\\", "^", "_", "`", "{", "}", "|", "~", "\"", "\'"];

  // prompt: length of the password? 8 characters to 128 characters
  var pwLength = prompt("Please type in the LENGTH of your desired password, between 8 to 128. Please type NUMBERS ONLY");
  console.log("user requested " + pwLength + " as the password length.");
  var pwLengthFinal = parseInt(pwLength);
  
  if (pwLengthFinal < 8 || pwLengthFinal > 128) {
    alert("Please select a length between 8 to 128 characters!");
    // return; returns nothing and ends the function
    return;
  }

  console.log("final password length is " + pwLengthFinal + ".");

  var j = 0;
  var pwCriteria = [];
  // pwCriteria structure: ["lower", "upper", "number", "special"];

  // confirm: lowercase? uppercase? numeric? special characters?
  var lowerRequire = confirm("Would you like any LOWERCASE letters in your password?");
  console.log("user requested lowercase letters in the final password: " + lowerRequire + ".");
  if (lowerRequire === true) {
    pwCriteria.push("lower");
  }

  var upperRequire = confirm("Would you like any UPPERCASE letters in your password?");
  console.log("user requested uppercase letters in the final password: " + upperRequire + ".");
  if (upperRequire === true) {
    pwCriteria.push("upper");
  }

  var numRequire = confirm("Would you like any NUMBERS in your password?");
  console.log("user requested numbers in the final password: " + numRequire + ".");
  if (numRequire === true) {
    pwCriteria.push("number");
  }

  var specialRequire = confirm("Would you like any SPECIAL CHARACTERS in your password?");
  console.log("user requested special characters in the final password: " + specialRequire + ".");
  if (specialRequire === true) {
    pwCriteria.push("special");
  }

  // important: at least one criteria must be selected (not sure how to make sure of this yet)
  if ((lowerRequire === true || upperRequire === true || numRequire === true || specialRequire === true) === false) {
    alert("Please select at least one password criteria!");
    return;
  }

  for (var i = 0; i < pwLengthFinal; i++) {
    
    var randomlowerCase = lowerCase[Math.round(Math.random() * lowerCase.length)];  
    console.log(randomlowerCase);
    var randomupperCase = upperCase[Math.round(Math.random() * upperCase.length)];  
    console.log(randomupperCase);
    var randomNum = numbers[Math.round(Math.random() * numbers.length)];  
    console.log(randomNum);
    var randomSpecChar = specChar[Math.round(Math.random() * specChar.length)];  
    console.log(randomSpecChar);


    if (pwCriteria[j] === "lower") {
      roughDraftPW.push(randomlowerCase);
    }

    else if (pwCriteria[j] === "upper") {
      roughDraftPW.push(randomupperCase);
    }
    
    else if (pwCriteria[j] === "number") {
      roughDraftPW.push(randomNum);
    }

    else if (pwCriteria[j] === "special") {
      roughDraftPW.push(randomSpecChar);
    }

    j++;
    
    if (j >= pwCriteria.length) {
      j = 0;
    }
    
  }

  // scrambles the elements in the array roughDraftPW
  roughDraftPW.sort(function(a, b){return 0.5 - Math.random()});

  // This will join the individual password alphanumeric characters into one solid password
  var finalPW = roughDraftPW.join("");

  // pushes the finalPW/passwordText into the textarea id "passwordDisplay" in the HTML
  // This will put the finalPW into the textarea id "password"
  var passwordText = document.querySelector("#passwordDisplay");

  passwordText.value = finalPW;

}

// Add event listener to generate password button
// the user clicks the button which launches prompt windows
generateBtn.addEventListener("click", writePassword);