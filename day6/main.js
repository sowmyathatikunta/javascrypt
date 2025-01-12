function main(){
    let a=10;
    function child()
    {
        console.log(a)
        console.log(this.a);
    }
    child()
}
main()