const email = document.getElementById('email');
const form = document.getElementById('form');

//Show input error messages
function showError(input) {
    const formControl = input.parentElement;
    formControl.className = 'notify error'
    const error = document.querySelector('.text-error');
    error.innerText = "Please provide a valid email address..";
}

//show success colour
function showSucces(input) {
    const formControl = input.parentElement;
    formControl.className = 'notify success';
    const error = document.querySelector('.text-error');
    error.innerText = "";
}

//check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSucces(input)
    } else {
        showError(input);
    }
}

//checkRequired fields
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input)
        } else {
            showSucces(input);
        }
    });
}

//Event Listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([email]);
    checkEmail(email);
});
