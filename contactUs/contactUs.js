"use strict";

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const send = document.getElementById("send");

send.addEventListener("click", (event) => {
  const credentials = [name.value, email.value, phone.value, message.value];
  event.preventDefault();
  if (
    credentials[0] !== "" ||
    credentials[1] !== "" ||
    credentials[2] !== "" ||
    credentials[3] !== ""
  ) {
    localStorage.setItem("credentials", credentials);
    console.log(credentials);
    window.location.href = "../index.html";
    alert("The message has been sent!");
  } else {
    alert("Complete all the fields!");
  }
});
