const form = document.getElementById('sign-up-form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
confirmPassword.disabled = true;

const ERROR_MESSAGE = 'Passwords do not match';

function validatePassword(e) {
  const field = e.target;
  if (confirmPassword.value && password.value !== confirmPassword.value) field.setCustomValidity(ERROR_MESSAGE);
  else field.setCustomValidity('');

  field.reportValidity();
}

function handlePasswordFields(e) {
  if (e.target.value) {
    confirmPassword.disabled = false;
    validatePassword(e);
  } else {
    confirmPassword.disabled = true;
    confirmPassword.value = '';
  }
}

confirmPassword.addEventListener('input', validatePassword);
password.addEventListener('input', handlePasswordFields);
