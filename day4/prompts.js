let operation=(a,b,task)=>{
    console.log(task(a,b));
}
operation(a=Number(prompt("enter a for addition")),
          b=Number(prompt("enter b for addition")),
         
    (a,b) =>{
        return a+b
    })

operation(a=Number(prompt("enter a for subtraction")),
          b=Number(prompt("enter b for subtraction")),
   
    (a,b) =>{
        return a-b
})
operation(a=Number(prompt("enter a for multiplication")),
          b=Number(prompt("enter b for multiplication")),
         
    (a,b) =>{
        return a*b
    })
    