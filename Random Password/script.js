var passwordBox = document.getElementById("Password");
var lenght = 12;

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var number = "0123456789"
var symbol = "@$%^&*()?<>/-=_[]{}+"

var allChar = uppercase + lowercase + number + symbol;

function createPassword() {

    var password = "";

    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (lenght > password.length) {
        password += allChar[Math.floor(Math.random() * allChar.length)]

    }
    passwordBox.value = password;

}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");

    alert("Password copied")
}