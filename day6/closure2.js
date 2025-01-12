function parent()
{
    function child1()
    {
        console.log("I am child 1")
        function child3(){
            console.log("i am child 3")
        }
        return child3
    }

    function child2()
    {
        console.log("I am child 2")
        function child4(){
            console.log("i am child 4")
        }
        return child4
    }
    return [child1, child2] 
}
parent()[0]()()
parent()[1]()()