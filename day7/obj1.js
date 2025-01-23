function obj1(name,id)
{
          //this keyword changes its functionality based on the situation.It will target the current object in constructor function.
  this.name=name; //name is identifier
  this.id=id;  
}
let p1=new obj1("abc",1)
cosole.log(p1);
console.log(p1.name);
console.log(p1.id);
