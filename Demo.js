var x=10;
console.log("Test");

const PI = 3.14 //const can't be changed
//PI=23
console.log("PI == ",PI)

const arr=[20,25,40]
arr.push(60) // possible
arr[4]=50
console.log(arr)

//Anonymous and arrow functions
//IIFE - immediately invoked function expression

(function show(){
    console.log("test IITS")
})();

//anonymous fun

let show1= function(){
    console.log("Anonymous function")
}
show1();
//single line anonymous

let show2 = ()=>console.log("Arrow..")
show2();
//multiple line anonymous

let sum=(a=15,b=50)=>{
    let result=0;
    result=a+b;
    return result;
}

console.log(sum(10,40));
console.log(sum(45));
console.log(sum());

//OBJECT

//Create a student class with attributes and find the 4th highest marks (to deliberately use)

class Student{
    constructor(name,marks) {
        this.name=name;
        this.marks=marks;
    }
}
const s1=new Student("Rudra",75);
const s2=new Student("Shiva",94);
const s3=new Student("Shyam",66);
const s4=new Student("Narayan",88);
const s5=new Student("Riddhi",51);
const s6=new Student("Vrinda",84);

//console.log(s4)

const arr=[s1,s2,s3,s4,s5,s6]

arr.sort((a,b)=>b.marks - a.marks)

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}


//Write a program in js to find odd & even

function find(n){
    if(n%2==0){
        console.log("Even");
    }
    else
        console.log("ODD");
}
find(45);


let find1=function(n){
    let res=(n%2==0)?"Even":"Odd";
    console.log(res);
}

find1(34);

let find2=(n)=>(n%2==0)?"Even":"Odd";

console.log(find2(10))

//write a program to create a basic calculator

let add=(a,b)=>a+b;
let sub=(a,b)=>a-b;
let prod=(a,b)=>a*b;
let div=(a,b)=>a/b;

switch(3){
    case 1:
        console.log(add(10,20));
        break;
    case 2:
        console.log(sub(40,35));
        break;
    case 3:
        console.log(prod(6,14));
        break;
    case 4:
        console.log(div(55,13));
        break;          --
}

