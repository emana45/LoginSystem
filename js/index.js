var userNameInput = document.getElementById('userName');
var userEmailInput = document.getElementById('userEmail');
var userPasswordInput = document.getElementById('userPassword');
var logBtn = document.getElementById('logBtn');
var success = document.getElementById('success');
var signIn = document.getElementById('signIn');
var nameAlert = document.getElementById('nameAlert');
var emailAlert = document.getElementById('emailAlert');
var passAlert = document.getElementById('passAlert');
var existAlert = document.getElementById('existAlert');
var regPage = document.getElementById('regPage');

var accountList = [];
var bool;
var exist = 0;

if (localStorage.getItem('accounts') !== null) {
    accountList = JSON.parse(localStorage.getItem('accounts'));
}

logBtn.onclick = function () {
    validateInput();
    if (bool == true) {
        createAccount();
        success.classList.remove('d-none');
        emailAlert.classList.add('d-none');
        passAlert.classList.add('d-none');
        existAlert.classList.add('d-none');
    }
    else {
        alerts();
    }
}

function createAccount() {
    var account = {
        username: userNameInput.value,
        useremail: userEmailInput.value,
        userpassword: userPasswordInput.value
    }

    accountList.push(account);
    localStorage.setItem('accounts', JSON.stringify(accountList));
    clearForm();
}
function clearForm() {
    userNameInput.value = null;
    userEmailInput.value = null;
    userPasswordInput.value = null;
}


function newEmail() {
    if (accountList.length !== 0) {
        {
            for (var i = 0; i < accountList.length; i++) {
                if (userEmailInput.value == accountList[i].useremail) {
                    exist = 1;
                }
            }
        }
    }
    else{
        return 0;
    }
}



function validateName() {
    var nameRegex = /^([a-z]|[A-Z]){3,}$/;
    if (nameRegex.test(userNameInput.value) == true) {
        return true;
    }
    else {
        return false;
    }
}

function validateEmail() {
    var emailRegex = /^([a-z]|[A-Z]|[0-9])+@gmail.com$/;
    if (emailRegex.test(userEmailInput.value) == true) {
        return true;
    }
    else {
        return false;
    }
}

function validatePass() {
    var PassRegex = /^([a-z]|[A-Z]|[0-9]){6,}$/;
    if (PassRegex.test(userPasswordInput.value) == true) {
        return true;
    }
    else {
        return false;
    }
}

function validateInput() {
    var nameFun = validateName();
    var emailFun = validateEmail();
    var passFun = validatePass();
    newEmail();
    if (nameFun == true && emailFun == true && passFun == true && exist == 0) {
        bool = true;
    }

    else {
        bool = false;
        if (nameFun == false) {
            return 1;
        }
        else if (emailFun == false) {
            return 2;
        }
        else if (passFun == false) {
            return 3;
        }
        else if (exist == 1) {
            return 4;
        }
    }
}


function alerts() {
    var x = validateInput();
    if (x == 1) {
        nameAlert.classList.remove('d-none');
        emailAlert.classList.add('d-none');
        passAlert.classList.add('d-none');
        existAlert.classList.add('d-none');
        success.classList.add('d-none');
    }
    else if (x == 2) {
        nameAlert.classList.add('d-none');
        emailAlert.classList.remove('d-none');
        passAlert.classList.add('d-none');
        existAlert.classList.add('d-none');
        success.classList.add('d-none');
    }
    else if (x == 3) {
        nameAlert.classList.add('d-none');
        emailAlert.classList.add('d-none');
        passAlert.classList.remove('d-none');
        existAlert.classList.add('d-none');
        success.classList.add('d-none');
    }

    else {
        nameAlert.classList.add('d-none');
        emailAlert.classList.add('d-none');
        passAlert.classList.add('d-none');
        existAlert.classList.remove('d-none');
        success.classList.add('d-none');
    }
}

function SignIn() {
    window.location.href = "file:///D:/W.D/Assignments/Assignment12/index2.html";
}

