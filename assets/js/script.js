// special characters array
var specialCharacters = [
    '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// numeric characters array
var numericCharacters = [
    '0', 
    '1',
    '2', 
    '3', 
    '4', 
    '5', 
    '6', 
    '7', 
    '8', 
    '9'
];

// lowercase Characters array
var hasLowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// uppercase Characters array
var hasUpperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

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
    var hasUpperCasedCharacters = confirm(
        'Click OK to confirm including uppercase characters.'
    );

    // conditional statement to check if user does not include any types of characters. Password generatr ends if all variables evaluate to false
    if (
        hasSpecialCharacters === false &&
        hasNumericCharacters === false &&
        hasLowerCasedCharacters === false &&
        hasUpperCasedCharacters === false
    ) {
        alert('Must select at least one character type');
        return null;
    }

    // object to store user input
    var passwordOptions = {
        length: length,
        hasSpecialCharacters: hasSpecialCharacters,
        hasNumericCharacters: hasNumericCharacters,
        hasLowerCasedCharacters: hasLowerCasedCharacters,
        hasUpperCasedCharacters: hasUpperCasedCharacters,
    };

    return passwordOptions;
}

// getting a random element from an array
function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];

    return randElement;
}

// generate a password with user input
function generatePassword() {
    var options = getPasswordOptions();
    // store password as it's being concatenated
    var result = [];

    // array to store types of characters to include in password
    var possibleCharacters = [];

    // array to contain one of each type of chosen character to ensure each will be used
    var guaranteedCharacters = [];

    // check if an options object exists, if not exit the function
    if (!options) return null;

    // conditional statement that adds array of special characters into array of possible characters based on user input
    // push new random special character to guaranteedCharacters
    if (options.hasSpecialCharacters) {
        possibleCharacters = possibleCharacters.concat(specialCharacters);
        guaranteedCharacters.push(getRandom(specialCharacters));
    }

    // conditional statement that adds array of numeric characters into array of possible characters based on user input
    // push new random special character to guaranteedCharacters
    if (options.hasNumericCharacters) {
        possibleCharacters = possibleCharacters.concat(numericCharacters);
        guaranteedCharacters.push(getRandom(numericCharacters));
    }

    // conditional statement that adds array of lowercase characters into array of possible characters based on user input
    // push new random special character to guaranteedCharacters
    if (options.hasLowerCasedCharacters) {
        possibleCharacters = possibleCharacters.concat(hasLowerCasedCharacters);
        guaranteedCharacters.push(getRandom(hasLowerCasedCharacters));
    }

    // conditional statement that adds array of uppercase characters into array of possible characters based on user input
    // push new random special character to guaranteedCharacters
    if (options.hasUpperCasedCharacters) {
        possibleCharacters = possibleCharacters.concat(hasUpperCasedCharacters);
        guaranteedCharacters.push(getRandom(hasUpperCasedCharacters));
    }

    // for loop to iterate over the password length from the options object,
    for (var i = 0; i < options.length; i++) {
        var possibleCharacter = getRandom(possibleCharacters);

        result.push(possibleCharacter);
    }

    // mix in at least one of each guaranteed charcter in the result
    for (var i = 0; i < guaranteedCharacters.length; i++) {
        result[i] = guaranteedCharacters[i];
    }

    // transform the result into a string and pass into writePassword
    return result.join('');
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