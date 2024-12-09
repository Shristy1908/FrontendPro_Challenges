// DON'T remove the below import
import "./styles.css";

const btn = document.getElementById("btn");
const emailinput = document.getElementById("emailinput");
const validatedMsg = document.getElementById("validatedMsg");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
btn.addEventListener("click", function () {
  alert("success");
});

emailinput.addEventListener("input", function () {
  if (emailRegex.test(emailinput.value)) {
    validatedMsg.innerText = "";
  } else {
    validatedMsg.innerText = "Not valid Email";
  }
});
