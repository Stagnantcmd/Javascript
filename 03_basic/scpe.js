let a=7//block level
const c=1//block level
var b=3//not block level or it is globl scope


if(true){
    let num=3
    if(num===3){
        console.log("you can access")
        let ytt=44
    }
   // console.log(ytt)
   //you cant access form child while we can access from parent
}



// ===========================================


add(2)
//but here we can initiaze before 
function add(num1){
    console.log(num1)
}


addtwo(23)
//we cant access addtwo before initiaization
const addtwo=function(num2){
    console.log(num2)
}
