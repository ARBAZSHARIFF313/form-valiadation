var nameerror  = document.getElementById('name-error');
var phoneerror  = document.getElementById('phone-error');
var emailerror  = document.getElementById('email-error');
var messageerror  = document.getElementById('message-error');
var submiterror  = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameerror.innerHTML = 'Name is required';
        return false;
    }

    if (!name.match(/^[A-Za-z]+ [A-Za-z]+$/)) {
        nameerror.innerHTML = 'Write Full Name (first and last name required)';
        return false;
    }

    nameerror.innerHTML = 'Valid';
    return true;
}

function validatephone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneerror.innerHTML = 'Phone is required';
        return false;
    }

    if(phone.length !== 10){
        phoneerror.innerHTML = 'Phone number should be 10 digits';
        return false;
    }

    if (!phone.match(/^[0-9]{10}$/)) {
        phoneerror.innerHTML = 'Only digits are allowed';
        return false;
    }

    phoneerror.innerHTML = 'Valid';
    return true;
}

function validateemail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailerror.innerHTML = 'Email is required';
        return false;
    }

    if(!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailerror.innerHTML = 'Invalid email address';
        return false;
    }

    emailerror.innerHTML = 'Valid';
    return true;
}

function validatemessage(){
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if(left > 0){
        messageerror.innerHTML = left + ' more characters required';
        return false;
    }

    messageerror.innerHTML = 'Valid';
    return true;
}

function validateform(){
    var isValid = true;

    submiterror.style.display = 'none';
    if(!validateName()){
        isValid = false;
    }
    if(!validatephone()){
        isValid = false;
    }
    if(!validateemail()){
        isValid = false;
    }
    if(!validatemessage()){
        isValid = false;
    }

    if (!isValid) {
        submiterror.style.display = 'block';
        submiterror.innerHTML = 'Please fix the errors to submit';
        setTimeout(function() {
            submiterror.style.display = 'none';
        }, 3000);
        return false;
    }

    return true; 
}
