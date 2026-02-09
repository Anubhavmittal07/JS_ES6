//Object creation and simple this =========

const user={
    name:"Anubhav",
    age:40,
    welcome:function()
    {
        console.log(`${this.name},welcome to ES6`)
        console.log(this)
    }
};
user.welcome()
user.name="Test"
user.welcome()
console.log(this.name)

//-----
function outer() {
    let x=10;
    function inner(){
        console.log("inner ",x);
    }
    inner();
}
outer();

let a=5;
function outer(){
    let b=6;
    function inner(){
        let c=10;
        console.log(a,b,c);
    }
    inner();
}
outer();

//Lexical this using normal function

let abc={
    name:"Anubhav",
    outer: function()
    {
        console.log("Here in log ",this.name),
        function inner(){
            console.log("in inner",this.name)
        }
        inner();//error as this is normal fun de not take the near by context value
    }

}
abc.outer();

let abd={
    name:"Anubhav",
    outer: function()
    {
        console.log("Here in log",this.name),
        inner=()=>{
            console.log("in inner",this.name)
        }
        inner();//will work as arrow fun has the near by context this
    }

}
abd.outer();

//Destructing of array

let numbers=[10,20,30]

let [p,q,r]=numbers;
console.log('p=',p,'q=',q,'r=',r)
//Extra values are ignored

//swapping
let x=5;
let y=10;
[x, y]=[x, y];
console.log(x,y);

const arr=[10,20,30]
const [d,b,,c]=arr

const [a1,b1,c1,d1]=arr
//const [x1,...y1]=arr   //;;; -> is REST operator (bache hue saare jaye)
console.log(c1,d1)
console.log()
