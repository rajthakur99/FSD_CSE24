//console.log("hello I m using JS")



// function sum(a,b){
//     return Math.sqrt(a)+Math.sqrt(b);
// }
// console.log(sum(81,49));



// function as an expression
// const sum=function (a,b){
//     return Math.sqrt(a)+Math.sqrt(b);
// }
// console.log(sum(81,49));


//arrow function
// const sum=(a,b)=>{return a+b};
// console.log(sum(1,6));


//IIFE
// (()=>{
//     console.log("Heyy....using IIFE")
// })();



//let and var 
// let a="23";
// console.log(typeof(a));
// if(a<30){
//     let a=40;
//     console.log("value of a inside block=" +a)
// }
// console.log("value of a outside block"+a)



//callback
// function sum(a,b){
//     return a+b;
// }
// function msgWithSum(clbk,msg){
//     const result=clbk(40,50);
//     console.log("hiii,"+msg+"and your result is="+result)
// }
// msgWithSum(sum,"Rahul")



// function login(error,msg){
//     if(error){
//         console.log("Error is:"+error)
//     }
//     else{
//         console.log(msg)
//     }
// }
// function loginHandler(username,password,clbk){
//     if(username=="raj" && password=="12345"){
//         clbk(null,"Login Success")
//     }else{
//         clbk("username or password is incorrect",null)
//     }
// }
// loginHandler("raj","1245",login)


//Synchronization
// console.log("One")
// console.log("Two")
// console.log("Three")


//asynchronous
// console.log("One")
// for(i=0; i<1000; i++){
//     console.log("i= "+i);
// }
// setTimeout(()=>{console.log("Two")},1000)
// console.log("Three")

const container=document.getElementById('container');
const button=document.getElementById('btn');

const h1=document.createElement('h1');
console.log(h1)
h1.innerHTML='ABES Engineering College';
const loader=document.createElement('h2');
container.appendChild(loader)
const img=document.createElement('img');

// console.log(button)
// console.log(container)

function ping(){
    try{
        loader.innerHTML='<h2>Loading Data...</h2>'
   // alert('server ping');
   container.innerHTML='<h2 style=color:red>Welcome to DOM</h2>'
   h1.style.backgroundColor='cyan';
   h1.style.color='red';
   container.appendChild(h1);
   img.src="https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg";
   img.setAttribute('height',200);
   img.setAttribute('width',200);
   container.appendChild(img);
}catch(e){
    loader.innerHTML='<h2 style=color:red>Error in loading data</h2>'
}
finally{
    loader.innerHTML='';
}
}
button.addEventListener('click',ping);