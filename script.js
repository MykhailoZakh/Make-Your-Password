// Assignment Code

var generateBtn = document.querySelector("#generate");
// Strings with different characters for password
let capitalLetters =[`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`];

let lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]; 

let numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let specialCharacters = [`!`, `"`, `#`, `$`, `%`, `&`, `'`, `(`, `)`, `*`, `+`, `,`, `-`, `.`, `/`, `:`, `;`, `<`, `=`, `>`, `?`, `@`, `[`, `]`, `^`, `_`, "`", `{`, `|`, `}`, `~`];




// }
// Write password to the #password input
function writePassword() {
  // Add  prompt window to ask length of the password 8-128 
  let passwordLength = window.prompt(`What is your password length? Chose from 8 to 128.`);
  // Logic to check if password length is acceptable
  if ((parseInt(passwordLength) < 8) || (parseInt(passwordLength) > 128)) {
  window.alert(`Wrong Password Length. Please chose from 8 to 128!! 🙌📑`);
  return;
}
  // Add confirm window for Upper Case
  let hasCapitalLetters = window.confirm(`Do you want Capital Letters in your password?`);

  // Add confirm window for Lower Case 
  let hasLowerCaseLetters = window.confirm(`Do you want Lower Case Letters in your password?`);

  // Add confirm window for Numeric 
  let hasNumeric = window.confirm(`Do you want Numbers in your password?`);

  // Add confirm window for Special Characters
  let hasSecialCharacters = window.confirm(`Do you want Special Characters in your password?`);

  // Logic to check if user choose at least one condition
  if((!hasCapitalLetters && !hasLowerCaseLetters) && (!hasNumeric && !hasSecialCharacters)) {
    window.alert(`You need to chose at least one condition to create Your Password!! 🤷‍♂️🤷‍♀️ Please try again! 😊`)
    return ;
  }

  // console.log(passwordLength, hasCapitalLetters, hasLowerCaseLetters, hasNumeric, hasSecialCharacters);

  // var password = generatePassword();
  
  let newPasswordArray = [];
  let newPassword = ``;
  //  Loop to check what kind of symbols need to be included in password
  for(i=0; i < passwordLength; i++) {
      if(hasCapitalLetters) {
        newPasswordArray.push(capitalLetters[Math.floor(Math.random() * capitalLetters.length)]);
      }
      if(hasLowerCaseLetters) {
        newPasswordArray.push(lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)]);
      }
      if(hasNumeric) {
        newPasswordArray.push(numeric[Math.floor(Math.random() * numeric.length)]);
      }
      if(hasSecialCharacters){
        newPasswordArray.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
      }
    }
  
    //  Loop to add chosen characters to newPassword string
  for(i=0; i < passwordLength; i++){
      newPassword += `${newPasswordArray[Math.floor(Math.random() * newPasswordArray.length)]}`;
  }
    // console.log(newPassword);
    
  //  Selection of the text area id and declaration a new variable for it
  var passwordText = document.querySelector("#password");
  //  Adding a new string with new password that we created to a variable  
  passwordText.value = newPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);