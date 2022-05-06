// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacter = "!@#$%^&*()+[]{}`~ ";
var number = " 0123456789 ";

var randomString ="";
var PwasswordString ="";



var generatePassword=function(){

  //password length must between 8-128 characters
  var passwordLength = parseInt(window.prompt("How Many Characters Do You want For Your Password? Pwassword Must Be in Between 8-128.")); 
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
      console.log(randomString);
    }
  }
  
};


//use the answers to generator a list of possible character

//use the list of possible characters to generate a random password

//validate that the password meets the requrements

//write the password on the screen

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
