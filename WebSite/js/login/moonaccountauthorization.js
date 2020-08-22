const objRegName = document.getElementById('regName')
const objRegEmail = document.getElementById('regEmail')
const objRegPassword = document.getElementById('regPassword')
const objRegisterForm = document.getElementById('register-form')

const objLogEmail = document.getElementById('logEmail')
const objLogPassword = document.getElementById('logPassword')
const objSigninForm = document.getElementById('signin-form')

function signin(){
    const email = objLogEmail.value.trim();
    const pass = objLogPassword.value.trim();
    
    if ((email == '') || (pass == "" )) {
        // Throw Username / Password null error
        if (email == '') {setErrorFor(objLogEmail, "Email cannot be empty!"); }
        if (pass == '') { setErrorFor(objLogPassword, "Password cannot be empty!"); }
    }
}

function signup(){
    const name = objRegName.value.trim();
    const email = objRegEmail.value.trim();
    const pass = objRegPassword.value.trim();

    //Null checks
    if ((name == '') || (email == '') || (pass == '')){
        //Throw Name / Username / Password null error
        if (name == '') { setErrorFor(objRegName, "Username cannot be empty!"); }
        if (email == '') { setErrorFor(objRegEmail, "Email cannot be empty!"); }
        if (pass == '') { setErrorFor(objRegPassword, "Password cannot be empty!"); }
    }


}