"use strict";

const eyeIcon = document.getElementById('eyeIcon');
const password = document.getElementById('password');

eyeIcon.addEventListener("click", () => {
  if (password.type == 'password') {
    password.type = 'text';
    eyeIcon.src = "img/eye-open.png";
  } else {
    password.type = 'password';
    eyeIcon.src = "img/eye-close.png";
  }
});
