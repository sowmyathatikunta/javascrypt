function main(m,n){
    new Promise((resolve,reject) => {
        setTimeout(()=>{
            for(let i=m;i<=n;i++){
                console.log(i);
            }
            return resolve()
        },5000)
    })
.then(()=>console.log("promise is resolved"))
.catch(()=>console.log("error occured"))
}
main(1,10)