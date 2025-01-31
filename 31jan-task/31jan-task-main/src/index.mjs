import "./styles.css";

const FirstBtn = document.getElementById("firstbtn");
const SecBtn = document.getElementById("secBtn");

SecBtn.addEventListener("click", () => {
  FirstBtn.style.display = "none";
});
