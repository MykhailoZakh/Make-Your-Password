// Assignment Code

var generateBtn = document.querySelector("#generate");
let cLetters =[`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`];
let lLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]; 

let numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let specialChars = [`!`, `"`, `#`, `$`, `%`, `&`, `'`, `(`, `)`, `*`, `+`, `,`, `-`, `.`, `/`, `:`, `;`, `<`, `=`, `>`, `?`, `@`, `[`, `]`, `^`, `_`, "`", `{`, `|`, `}`, `~`];




// }
// Write password to the #password input
function writePassword() {
  // Add window prompt to ask length of the password 8-128 
  let passwLength = window.prompt(`What is your password length? Choose from 8 to 128.`);
  // Logic to check if password length is acceptable
  if ((Number(passwLength) < 8) || (Number(passwLength) > 128)) {
  window.alert(`Wrong Password Length. Please choose from 8 to 128!! 🤷‍♀️🤷‍♂️`);
  return;
}
  // Add window confirm for Upper Case
  let hasCLetters = window.confirm(`Do you want Capital Letters in your password?`);

  // Add window confirm for Lower Case 
  let hasLLetters = window.confirm(`Do you want Lower Case Letters in your password?`);

  // Add window confirm for Numeric 
  let hasNumeric = window.confirm(`Do you want Numbers in your password?`);

  // Add windor confirm for Special Characters
  let hasSecialChars = window.confirm(`Do you want Special Characters in your password?`);

  // Logic to check if user choose at least one condition
  if((!hasCLetters && !hasLLetters) && (!hasNumeric && !hasSecialChars)) {
    window.alert(`You need to chose at least one condition to create Your Password!! 🤷‍♂️🤷‍♀️ Please try again! 😊`)
    return ;
  }

  console.log(passwLength, hasCLetters, hasLLetters, hasNumeric, hasSecialChars);

  // var password = generatePassword();
  let newPassArr = [];
  let newPass = ``;
  //  Logisc to check what kind of symbols need to be included in password
  for(i=0; i < passwLength; i++) {
      if(hasCLetters) {
        newPassArr.push(cLetters[Math.floor(Math.random() * cLetters.length)]);
      }
      if(hasLLetters) {
        newPassArr.push(lLetters[Math.floor(Math.random() * lLetters.length)]);
      }
      if(hasNumeric) {
        newPassArr.push(numeric[Math.floor(Math.random() * numeric.length)]);
      }
      if(hasSecialChars){
        newPassArr.push(specialChars[Math.floor(Math.random() * specialChars.length)]);
      }
    }
  
  for(i=0; i < passwLength; i++){
      newPass += `${newPassArr[Math.floor(Math.random() * newPassArr.length)]}`;
  }
    console.log(newPass);
    
  
  var passwordText = document.querySelector("#password");

  passwordText.value = newPass;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);