const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phone-number');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#confirm-password');

const firstNameError = document.querySelector('#fname-error');
const lastNameError = document.querySelector('#lname-error');
const emailError = document.querySelector('#email-error');
const phoneNumberError = document.querySelector('#phone-error');
const passwordError = document.querySelector('#pwd-error');
const passwordConfirmError = document.querySelector('#cpwd-error');

firstName.addEventListener('input', () => {
    if (firstName.value === ''){
        firstNameError.textContent = 'Please enter your first name!'
    } else {
        firstNameError.textContent = ''
    }
});

lastName.addEventListener('input', () => {
    if (lastName.value === ''){
        lastNameError.textContent = 'Please enter your first name!'
    } else {
        lastNameError.textContent = ''
    }
});

email.addEventListener('input', () => {
    if (email.validity.typeMismatch){
        emailError.textContent = 'Please enter a valid e-mail address! Example: john@smith.com';
    } else {
        emailError.textContent = ''
    }
});

phoneNumber.addEventListener('input', ()=> {
    if (phoneNumber.validity.typeMismatch){
        phoneNumberError.textContent = 'Please enter a 10-digit phone number'
    } else {
        phoneNumberError.textContent = ''
    }
});



