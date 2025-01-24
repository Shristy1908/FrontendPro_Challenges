import "./styles.css";

let colors = ["red", "yellow", "blue", "green", "cyan"];

let index = 0;
let body = document.getElementsByTagName("body")[0];
document.getElementById("btn").addEventListener("click", () => {
  body.style.backgroundColor = colors[index];
  index = (index + 2) % colors.length;
});

const name = document.getElementById("name");
let index1 = 0;
let names = ["Shristy", "Ridhi", "Jay", "Shubham"];
name.addEventListener("click", () => {
  name.innerText = names[index1];
  index1 = (index1 + 1) % names.length;
});
