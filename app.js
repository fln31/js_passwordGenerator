const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$^*ùm!:;,&é\"'(-è_ç)";
const pwdOutput = document.querySelector(".password-content");
const generateButton = document.querySelector(".generate-password-btn");
const copyBtn = document.querySelector(".copy-btn");

// let passProps = {
//   length : 10,
//   lowercaseChars : true,
//   upperCaseChars : true,
//   numbers : true,
//   symbols : true
// }

// const checkboxes = document.querySelectorAll('.checkbox-group input')

// Listening props
document.querySelector('[type="range"]').addEventListener("input", (e) => {
  document.querySelector('[for="range"] span').textContent = e.target.value;
});

// checkboxes.forEach((checkbox) => {
//   checkbox.addEventListener('input', () => {
//     console.log(checkbox.id)
//     let check = checkbox.id
//     let newArray = {...passProps, check : checkbox.checked}
//     console.log(newArray)
//   })
// })

// document.querySelector('#lowercaseChars').addEventListener('input', (e) => {
//   passProps.lowercaseChars = document.querySelector('#lowercaseChars').checked
// })
// document.querySelector('#upperCaseChars').addEventListener('input', (e) => {
//   passProps.upperCaseChars = document.querySelector('#upperCaseChars').checked
// })
// document.querySelector('#numbers').addEventListener('input', (e) => {
//   passProps.numbers = document.querySelector('#numbers').checked
// })
// document.querySelector('#symbols').addEventListener('input', (e) => {
//   passProps.symbols = document.querySelector('#symbols').checked
// })

function createPwd() {
  let data = [];
  let password = "";

  if (document.querySelector("#lowercaseChars").checked)
    data.push(...dataLowercase);
  if (document.querySelector("#upperCaseChars").checked)
    data.push(...dataUppercase);
  if (document.querySelector("#numbers").checked) data.push(...dataNumbers);
  if (document.querySelector("#symbols").checked) data.push(...dataSymbols);

  for (let i = 0; i < document.querySelector('[type="range"]').value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }

  if (data.length === 0) {
    document.querySelector(".error-msg").textContent =
      "Veuillez cocher au moins une case";
    pwdOutput.textContent = "";
    return;
  } else {
    document.querySelector(".error-msg").textContent = "";
  }

  pwdOutput.textContent = password;
}

function copyPwd() {
  navigator.clipboard.writeText(pwdOutput.textContent)
  generateButton.textContent = "Copié !";
  console.log('copié')
  setInterval(() => {
    generateButton.textContent = "Générer";
  }, 2000)
}

window.addEventListener("load", createPwd);
copyBtn.addEventListener("click", () => copyPwd());
generateButton.addEventListener("click", () => createPwd());
