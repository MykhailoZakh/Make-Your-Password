// Assignment Code
var generateBtn = document.querySelector("#generate");
let cLetters =[`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`];
let lLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]; 

let numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let specialChars = [`!`, `"`, `#`, `$`, `%`, `&`, `'`, `(`, `)`, `*`, `+`, `,`, `-`, `.`, `/`, `:`, `;`, `<`, `=`, `>`, `?`, `@`, `[`, `]`, `^`, `_`, "`", `{`, `|`, `}`, `~`];

// 
// for (i = 0; i < cLetters.length; i++) {
//   console.log(`${cLetters[i]}, ${lLetters[i]}`);
// }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add window prompt to ask lenght of the password 8-128 

// Add window confirm for Upper Case

// Add window confirm for Lower Case 

// Add window confirm for Numeric 

// Add windor confirm for Special Characters