// prompt user for password options
function getPasswordOptions() {
    // store length of password from user input
    var length = parseInt(
        prompt('How many characters would you like your password to contain?')
    );

    // conditional statement to check if password length is a number, prompt ends if false
    if (Number.isNaN(length)) {
        alert('Password length must be provided as a number');
        return null;
    }

    // conditional statement to check if password length is at least 8 characters long, prompt ends of false
    if (length < 8) {
        alert('Password length must be at least 8 characters');
        return null;
    }

    // conditional statement to check if password length is less than 128 characters long, prompt ends if false
    if (length > 128) {
        alert('Password length must be less than 129 characters');
        return null;
    }

    // variable to store boolean for the inclusion of special characters
    var hasSpecialCharacters = confirm(
        'Click OK to confirm including special characters.'
    );

    // variable to store boolean for the inclusion of numeric chracters
    var hasNumericCharacters = confirm(
        'Click OK to confirm including numeric characters.'
    );

    // variable to store boolean for the inlcusion of lowercase characters
    var hasLowerCasedCharacters = confirm(
        'Click OK to confirm including lowercsse characters.'
    );

    // variable to store boolean for the inclusion of uppercase characters
    varhasUpperCasedCharacters - confirm(
        'Click OK to confirm including uppercase characters.'
    );
}


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