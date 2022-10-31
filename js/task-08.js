const form = document.querySelector('.login-form');

form.addEventListener('submit', onHandleSubmit);

function onHandleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Please fill all the fields!');
    return;
  }

  const result = { email: email.value, password: password.value };
  console.log(result);
  event.currentTarget.reset();
}
