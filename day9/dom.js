let a=document.createElement("h1")
console.log(a);
a.textContent="hello-world"
document.body.appendChild(a)

a.style.backgroundColor="red"


let div=document.createElement("div")
console.log(div);
//append div tag to body tag.
document.body.appendChild(div)
div.style.border="5px solid"
//create ol tag
let ol=document.createElement("ol")
console.log(ol);
//append ol tag to div tag
div.appendChild(ol)
//create an li-tag
let li1=document.createElement("li")
console.log(li1);
li1.textContent="react"
ol.appendChild(li1)
//apend li-tag to ol-tag
let li2=document.createElement("li2")
console.log(li2);
li2.textContent="node.js"
ol.appendChild(li2)

ol.setAttribute("type","i")

let table=document.createElement("table")
console.log(table);
document.body.appendChild(table)
table.setAttribute("border","2px solid")
//create a tr-tag
let tr1=document.createElement("hello")
console.log(tr1)
table.appendChild(tr1)

let td1=document.createElement("td")
console.log(td1);
td1.textContent="hello"





