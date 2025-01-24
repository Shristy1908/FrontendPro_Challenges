function accordion(para, divArrow) {
  let paraEle = document.getElementById(para);
  let divArrowEle = document.getElementById(divArrow);

  paraEle.style.display = "none";

  divArrowEle.addEventListener("click", () => {
    if (paraEle.style.display == "none") {
      paraEle.style.display = "block";
      divArrowEle.innerText = "▼";
    } else {
      paraEle.style.display = "none";
      divArrowEle.innerText = "▶";
    }
  });
}

accordion("para1", "div1");
accordion("para2", "div2");
