// function newname(num1){
//     //num1 is parameter
//     console.log("hey function is called ")
//     let result=num1
//     return result
// }


// let result=newname(2)
// console.log("the final result",result)



function userlogin(user){
if(user===undefined){

    console.log("error")
    return
}
console.log("the man was found")
}

// userlogin(3)



function userlogindefault(user="yttr"){
    // if(user===undefined){
    //     console.log("erroor")
    //     return
    // }
    //this can execte without this 
    console.log("the man was found aliive")
}

// userlogindefault()



function restoper(...num1){
    //... this is also rest operator and spread operator
     console.log(num1)
}

//restoper(2,4,566)

//passing object

const newobj={
    name:"harjamn",
    tag:22
}

function newfun(anyobject){
    console.log(`hey your name is ${anyobject.name} and id${anyobject.tag}`)
}

// newfun(newobj)

//or

// newfun({
//     name:"H",
//     tag:2
// })


//array passing

function passarr(givearray){
    console.log(givearray[0])
}

const arr=[2,4,5,6,7,0]

passarr(arr)