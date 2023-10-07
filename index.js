const form = document.getElementById('sign-up-form');
const password = document.getElementById('password');
const errorMessage = document.getElementById('error-msg');
const confirmPassword = document.getElementById('confirm-password');

const ERROR_MESSAGE = 'Passwords do not match';

function validatePassword(e) {
  const field = e.target;
  if (confirmPassword.value && password.value !== confirmPassword.value) {
    field.setCustomValidity(ERROR_MESSAGE);
    addErrorClass(field);
    setErrorMessage(`* ${ERROR_MESSAGE}`);
  } else {
    password.setCustomValidity('');
    confirmPassword.setCustomValidity('');
    removeErrorClassInPasswordFields();
    setErrorMessage();
  }

  field.reportValidity();
}

function addErrorClass(field) {
  field.classList.add('error');
}

function removeErrorClassInPasswordFields() {
  password.classList.remove('error');
  confirmPassword.classList.remove('error');
}

function setErrorMessage(msg = '') {
  errorMessage.innerText = msg;
}

confirmPassword.addEventListener('input', validatePassword);
password.addEventListener('input', validatePassword);
form.addEventListener('submit', (e) => {
  e.preventDefault();
  location.reload();
});
