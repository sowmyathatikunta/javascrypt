let obj={
    name:"Sowmya",
    id:646,
    Department:"CSE",
    Phone:8341458469 
}

console.log(obj);

let obj1 =JSON.stringify(obj)
console.log(obj1);

let ob2=JSON.parse(obj1)
console.log(ob2);

window.fetch("data.json")
// .then((data)=>{ console.log(data);
// })
.then((data)=> data.json())
.then((res)=>{
    console.log(res);

res.map((x)=>{
    console.log(x);
    console.log(x.name);
    console.log(x.Department);
    
    document.body.innerHTML +=`<h1>${x.name}</h1>`
})
})

