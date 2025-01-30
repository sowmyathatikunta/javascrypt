 let demo=async ()=>{
    let data=await window.fetch("country.json")
    console.log(data);
    let res=await data.json()
    console.log(res);
  res.map((x)=>{
    console.log(x.country)
    console.log(x);
    let select=document.getElementById("select")
    console.log(select);

    select.innerHTML +=
    `<option value=${x.country}>${x.country}</option>`
 let demo1=document.getElementById("demo1")
 console.log(demo1);
 demo1.innerHTML+=
 `<option value=${x.country}>${x.country}</option>`

  })  
}

let btn=document.getElementById("btn")
console.log(btn);
btn.onclick=()=>{
  let search=document.getElementById("btn")
  console.log(search);
  let page=30
  window.fetch()
  .then((data)=>data.json())
  .then(res)=>{
    console.log(res);
    console.log(res.this);
    res.hits.map((x)=>{
      console.log(x);
      let div=document.getElementById("div")
    console.log(div);
    div.innerHTML +=`<img src=${x.previewURL}/>`
    })
    
  }
}

demo()
