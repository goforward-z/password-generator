// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacter = "!@#$%^&*()+[]{}`~ ";
var number = " 0123456789 ";

var randomString ="";
var PasswordString ="";



var generatePassword=function(){

  //password length must between 8-128 characters
  var passwordLength = parseInt(window.prompt("How Many Characters Do You want For Your Password? Password Must Be in Between 8-128.")); 
  if (passwordLength >=8 && passwordLength <= 128){
    //choose lowerCase, UpperCase, number,special character
    
    //lowercase
    var lowerCasePrompt = window.prompt("Do you want your password include lowercase letters? Yes or No.");
    if (lowerCasePrompt==="yes" || lowerCasePrompt==="YES"){
      randomString= randomString + lowerCase;
      
    }

    //uppercase
    var upperCasePrompt = window.prompt ("Do you want your password include uppercase letters? Yes or No");
    if (upperCasePrompt === "yes" || lowerCasePrompt === "YES"){
      randomString = randomString + upperCase;
    }

    //special characters
    var specialCharacterPrompt = window.prompt("Do you want your password include special characters? Yes or No");
    if(specialCharacterPrompt ==="yes"|| specialCharacterPrompt ==="YES"){
      randomString = randomString +specialCharacter;

    }

    //numbers
    var numberPrompt = window.prompt("Do you want your password include numbers? Yes or No");
    if(numberPrompt === "yes" || numberPrompt === "YES"){
      randomString = randomString + number;
      
    }
  }
  else{
    window.alert("Password Invalid, Please try again");
  };

  var characterTypes = lowerCasePrompt + upperCasePrompt + specialCharacterPrompt + numberPrompt

  if(! characterTypes){
    return;
  } 
  else{

    for(var i = 0; i < passwordLength; i++){
      PasswordString += randomString.charAt(Math.floor(Math.random()* randomString.length));
    }
    var finalPassword = PasswordString;
    return finalPassword;
  }
  
};


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
