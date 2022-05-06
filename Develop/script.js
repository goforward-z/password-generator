// Assignment code here


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
+

//promt user for number of characters

function promptCharacter(){
  var numberOfCharacters = prompt("How Many Characters Do You want For Your Password? Pwassword Must Be in Between 8-128.")
  if (numberOfCharacters>7 === numberOfCharacters<129){
    return numberOfCharacters;
  }
  else{
    alert("Your Password is Invalid");
    promptCharacter();
  }
};

//prompt the user for uppercase lowercase special characters numbers
function promptRequrement(){
  var promptUppercase =prompt("Do you Want Uppercase for your password?");
  promptUppercase = promptUppercase.toLowerCase();
  if(promptUppercase.trim()==="yes"){
    var confirmUppercase = true;
  }
  else if(promptUppercase.trim()==="no"){
    var confirmUppercase = false;

  }
}

//use the answers to generator a list of possible character

//use the list of possible characters to generate a random password

//validate that the password meets the requrements

//write the password on the screen