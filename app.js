const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // get the value from the inputs
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordValue2 = password2.value.trim();

  if (usernameValue === "") {
    //show error
    //   add error class
    setErrorFor(username, "Username cannot be blank");
  } else {
    //add success class
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else {
    setSuccessFor(password);
  }

  if (passwordValue2 === "") {
    setErrorFor(password2, "Password 2 cannot be blank");
  } else if (passwordValue !== passwordValue2) {
    setErrorFor(password2, "Password does not match");
  } else {
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message) {
  // .form control
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  //   add error message insdie small
  small.innerText = message;

  //   add error class
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  // .form control
  const formControl = input.parentElement;
  //   add success class
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
