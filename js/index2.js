var userEmailInput = document.getElementById('userEmail');
var userPasswordInput = document.getElementById('userPassword');
var logBtn = document.getElementById('logBtn');
var success = document.getElementById('success');
var signUp = document.getElementById('signUp');
var emailAlert = document.getElementById('emailAlert');
var passAlert = document.getElementById('passAlert');
var regAlert = document.getElementById('regAlert');

if(localStorage.getItem('accounts') !== null)
{
    var accountList = JSON.parse(localStorage.getItem('accounts'));
}
else{
    passAlert.classList.add('d-none');
    emailAlert.classList.add('d-none')
    regAlert.classList.remove('d-none');
} 

var exist=0;
var logList = [];

function checkEmail(){
   for(var i = 0 ; i<accountList.length ; i++){
    if(userEmailInput.value == accountList[i].useremail){
        if( userPasswordInput.value == accountList[i].userpassword){
             logMail();
             logIn();
            }
        else{
            passAlert.classList.remove('d-none');
            emailAlert.classList.add('d-none')
            regAlert.classList.add('d-none');
        }    
    }
    else if(userEmailInput.value !== accountList[i].useremail){
       emailAlert.classList.remove('d-none');
    }
   
}
}

function logMail(){
    var mail = 
{
  mailName : userEmailInput.value ,
  mailPassword : userPasswordInput.value
}

logList.push(mail);
localStorage.setItem('logAccounts',JSON.stringify(logList));
}

function SignUp(){
    window.location.href="file:///D:/W.D/Assignments/Assignment12/index.html"
}

function logIn(){
    window.location.href="file:///D:/W.D/Assignments/Assignment12/index3.html"
}