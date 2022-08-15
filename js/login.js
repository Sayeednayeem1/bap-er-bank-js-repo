// this is step number 1!
document.getElementById('btn-submit').addEventListener("click", function(){
    // this is step number 2
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step3: get password
    const passwordField = document.getElementById('user-password');
    password = passwordField.value;
    // danger: do not verify email password on the client side
    // step 3: verify email and password
    if(email === 'sontan@baap.com' && password === 'secret'){
        window.location.href= "bank.html";
    }
    else{
        alert("wtf man! put on a valid email and password");
    }


})