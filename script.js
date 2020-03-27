// Assignment Code
var generateBtn = document.querySelector("#generate");

//Password content/criteria options for computer to select from
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = lowerCaseLetters.toUpperCase();
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var numbers = "1234567890";
//Empty string to collect the randomized characters from the user's preferred selections.
var pickedCharacters = ""



// A function that runs through four steps: 
//  1.) prompts user to select desired criteria
//  2.) checks the user's password length selection is valid by looping
//  3.) "if" statements are checked to verify which variables the user selects for password criteria
//  4.) "for" loop uses math function to generate random characters from the variable options that the user has selected, 
//        then saves the information 

function generatePassword() {

  //Prompts user to enter desired password criteria
  var withLowerCase = confirm("Do you want lowercase letters?")
  var withUpperCase = confirm("Do you want uppercase letters?")
  var withNumbers = confirm("Do you want numbers?")
  var withSpecialCharacters = confirm("Do you want special characters")

    //if statements are used here to add each of the user's preferred criteria to the 
    // empty string "pickedCharacters".
  if (withLowerCase) {
    pickedCharacters = pickedCharacters + lowerCaseLetters;
  }
  if (withUpperCase) {
    pickedCharacters = pickedCharacters + upperCaseLetters;
  }
  if (withNumbers) {
    pickedCharacters = pickedCharacters + numbers;
  }
  if (withSpecialCharacters) {
    pickedCharacters = pickedCharacters + specialCharacters;
  }

  //If the user clicks "cancel" for all four selections, the function is run again until something is selected.
  if (withLowerCase === false && withUpperCase === false && withNumbers === false && withSpecialCharacters === false) {
    alert("You have not selected any criteria. Please try again.")
    generatePassword();
  }


  var isCorrect = false;

  // A while loop is used to prompt the user for their desired password length until
  // the correct requirements ( 8 - 128 characters) are fulfilled.
  while(isCorrect ===false) {
    var userInput = prompt("Choose a password length of at least 8 characters, but no more than 128 characters.")

    if (userInput >= 8 && userInput <= 128) {
      isCorrect = true;
  
    }else {
      alert("Incorrect selection. Please try again.")
      isCorrect = false;
    }
  }
  
  console.log(pickedCharacters);




//Loop for running through user selection to generate random characters and collect them into a string.
    var savedPassword = "";
    for (var i = 0; i <= userInput; i++){
   
      var randIndex = Math.floor(Math.random() * pickedCharacters.length)
   
      var randomlyPickedItem = pickedCharacters[randIndex];
    
      if (i === 0){
        var savedPassword = randomlyPickedItem;

      }
      else {
        savedPassword = savedPassword + randomlyPickedItem;

      }

    }
  
    console.log(savedPassword);
  
      //Prints the random character string to the center of the "Your Secure Password" box.
    return savedPassword;
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
