//object desturcting .......... 
let MyObj ={
    name:"Mittal",
    age:25,
    key:"XYZ"
}

let duplicate= {...MyObj,key:"ABC"}; //Default values
duplicate['Address'] = "GZB"
console.log("MyObj : ",MyObj)
console.log(duplicate)

let myObj2={
    name:"Anubhav",
    age:21,
    key:"XYZ"
}

myObj1.name="Mittal";
let {name,age:CurrentAge} = myObj1;
//console.log(name)
console.log(CurrentAge)

let Emp = {
    name: "Anubhav Mittal",
    age: 22,
    salary: 500000
}

let employee= {...Emp,salary:600000};
console.log(employee)


//Rest and Spread

const[firts,second,...rest] = [10,20,30,40,50];

console.log("first : ",first)
console.log("second : ",second)
console.log("rest : ",rest)

function sum(...numbers){
    return numbers.reduce((a,b) => a+b,0);

}
console.log(sum(10,20,30,40,50))
function show(a,...b){
    console.log("A ",a)
    console.log("B ",b)
}

//Function call is Async

console.log("1. Start")
setTimeout(() => {
   console.log("2. Cake is Ready.") 
}, 2000);
console.log("3. I am working on laptop.")

function bakeCake(myCallBack){
    console.log("1. The Cake is in the Oven")
    setTimeout(()=>{
        console.log("2. Cake is baked.")
        myCallBack();
    },2000)
}
bakeCake(()=> {
    console.log("3. Now you can eat the cake.")
})

//promises
//Use of promises using then and catch

function bakeCake(){
    return new Promise((myResolve , myReject)=> {
        console.log("1.Baking Cake")
        setTimeout(() => {
            let flag=false; //try this by changing value
            if(flag){
                myResolve("2.Cake is Ready.");
            }
            else{
                myReject("2. Cake is Burst")
            }
        }, 2000);

    })
}
bakeCake().then((msg)=>{
    console.log(msg);
    console.log("3.Lets eat the cake")
}).catch((msg)=>{
    console.log(msg)
    console.log("3.hum nahi khayenge, tum khao")
})
//check whether you can go to kashmir