// let arr = ["Shristy", "Saloni", "Ridhi", "Ruchi"];

// let body = document.getElementsByTagName("body")[0];
// const outerdiv = document.createElement("div");
// const ulEle = document.createElement("ul");

// outerdiv.appendChild(ulEle);
// body.appendChild(outerdiv);

// arr.map((ele)=>{
// const li = document.createElement("li");
// li.innerHTML = `<p id=${ele}>${ele}</p>`;
// ulEle.appendChild(li);
// })

// const secondChild=ulEle.children[1];
// if(secondChild){
//     secondChild.innerText="Sara";
// }

let body = document.getElementsByTagName("body")[0];
let arr = [];

let table = document.createElement("table");
let tHead = document.createElement("tHead");
let tBody = document.createElement("tBody");
let tr1 = document.createElement("tr");

table.appendChild(tHead);
table.appendChild(tBody);

tr1.innerHTML = `<th>Id</th><th>Title</th>`;
tHead.appendChild(tr1);

body.appendChild(table);

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((result) => {
    arr = result;
    console.log(arr);

    arr.forEach((ele) => {
      let tr2 = document.createElement("tr");
      tr2.innerHTML = `<td>${ele.id}</td><td>${ele.title}</td>`;
      tBody.appendChild(tr2);
    });

    table.style.borderCollapse = "collapse"; // Collapse table borders
    const cells = table.querySelectorAll("th, td");
    cells.forEach((cell) => {
      cell.style.border = "1px solid black";
      cell.style.padding = "8px";
    });
  });
