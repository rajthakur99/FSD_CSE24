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



function login(error,msg){
    if(error){
        console.log("Error is:"+error)
    }
    else{
        console.log(msg)
    }
}
function loginHandler(username,password,clbk){
    if(username=="raj" && password=="12345"){
        clbk(null,"Login Success")
    }else{
        clbk("username or password is incorrect",null)
    }
}
loginHandler("raj","1245",login)