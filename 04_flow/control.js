//if, switch ,true false values,nullish ,ternary\


let a=4
b=4
if(a==b){
    console.log("yes it a")
}


// operator + - % /
// == < > <= >= ===

//logical && , || ,!


//switch case
let key =-2
switch (key) {
    case -2:
        console.log("login")
        break;
    case 2:
        console.log("login but error")
        break;

    default:
        console.log("error")
        break;
}

//falsy values
//BigInt 0n, 0 , -0 ,"", false , null , undefined ,nan 

//truely values
//any values in string 
//"0" , " false " , [] , {} , function(){} empyty function,
let user={}
if (user) {
    console.log("user already found")
}else{
    console.log("erroror")
}


const arr=[]
if(arr.length === 0){
    console.log("yes we can ")
}

const objj={}
if (Object.keys(objj).length===0) {
    console.log("yes we can obj ")
    
}

// nullsih collense e operator (??)  this check null undefiended

let an=null ??7

console.log(an)


// ternary ope  condition?true:false

3==3?console.log("true"):console.log("false")
