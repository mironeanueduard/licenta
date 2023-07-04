"use strict";

const email = document.getElementById("email");
const password = document.getElementById("password");
const login = document.getElementById("login");

login.addEventListener("click", (event) => {
  const credentials = [email.value, password.value];
  event.preventDefault();
  if (credentials[0] !== "" || credentials[1] !== "") {
    localStorage.setItem("credentials", credentials);
    console.log(credentials);
    window.location.href = "../index.html";
  } else {
    alert("Incorrect credentials!");
  }
});
