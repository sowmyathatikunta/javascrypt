console.log(window);
console.log(window.document);
console.log(document.title);
console.log(document.URL);
console.log(document.head);
console.log(document.body);
console.log(document.title);
document.title="flipkart"
console.log(document.doctype);
console.log(typeof document);
document.links
let link=document.links
console.log(link);
//console.log(link[0]);
//console.log(link[1]);
//console.log(link[3]);

for(let i=0;i<link.length;i++)
{
    console.log(link[i]);
    link[i].className="demo"
    link[i].href="http://www.youtube.com"
    link[i].target="_blank"
}
let a=document.getElementById("demo")
console.log(a);
console.log(a.textContent);
a.textContent="batch6";
a.style.backgroundColor="red"
a.style.textAlign="center"


let b=document.getElementsByClassName("demo1")
console.log(b);
console.log(b[0]);
console.log(b[0].textContent);
b[0].style.backgroundColor="yellow"
console.log(b[1]);

let c=document.getElementsByTagName("p")
console.log(c);
console.log(c[1]);
c[1].style.color="red"
c[1].textContent="hello"

let d=document.getElementsByName("demo2")
console.log(d);
console.log(d[1]);
d[1].style.backgroundColor="crimson"

//console.log(document.body.childNodes);
//document.querySelector
//-->we have to pass value with css symbol
//-->will return reference of first-element
//document.querySelectorAll
//-->we have pass value with css symbol.
//-->will return reference in a node list.
let e=document.querySelector("#demo")
console.log(e);
let e1=document.querySelector(".demo1")
console.log(e1);

let f=document.querySelectorAll("#demo")
console.log(f);
console.log(f[0]);

let f1=document.querySelectorAll(".demo1")
console.log(f1);
console.log(f1[1]);

//events in dom:
//.......It is an action performed by end user on a webpage.
//TYPES:
//1.keyboard event
//--->Key up event
//--->key dowm event

//2.Mouse event
//--onMuseover event
//-->onMouseleave 
//-->dbclick

//3.Form event
//input event
//blur event
//focus event

//4.Pointer event
//click event








