let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let saveButton = document.getElementById("saveButton")

function generatePassword(len) {
  const lowerAlphabet = "abdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()_+=-[]{}|;:,./<>?";
  const characters =
    lowerAlphabet + upperAlphabet + numbers + specialCharacters;
  let generator = "";

  for (let i = 0; i < len; i++) {
    generator += characters[~~(Math.random() * characters.length)];
  }
  return generator;
}

function getPassword() {
  const newPassword = generatePassword(passwordLength.value);
  password.value = newPassword;
}

function savePassword() {
    document.title = password.value;
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(password.value));
    saveButton.setAttribute('download', `password.txt`);
}

function copyPassword() {
    password.disabled = false;
    password.select();
    document.execCommand("copy");
    password.disabled = true;
}