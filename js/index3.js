var logOutBtn = document.getElementById('logOut');
var boxName = document.getElementById('boxName');

logOutBtn.onclick = function(){
    window.location.href = "file:///D:/W.D/Assignments/Assignment12/index2.html"
}

var userName;
var accounts = JSON.parse(localStorage.getItem('accounts'));

var loginAccount = (JSON.parse(localStorage.getItem('logAccounts'))).pop();

for(var i = 0 ; i<accounts.length ; i++){
    if(accounts[i].useremail == loginAccount.mailName){
         userName = accounts[i].username ;
         console.log(userName)
    }
}

var cartona = `<p class="p-5 fs-1" id="welcome">Welcome ${userName}</p>`

boxName.innerHTML = cartona;