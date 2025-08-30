const arra=[3,6,8,"array"]
// console.log(arra[3])

const newarr= new Array("treee","apple","mango")
// console.log(newarr[1])

// newarr.push(2)
//insert at end
// newarr.unshift(233)
//insert at start this will also caused lag due shift of n.b
// console.log(newarr)  


// console.log(newarr.includes("treee"))
//include checks the values and also print in boolean true or false 

// console.log(newarr.indexOf("treee"))
//find index of values


// console.log(newarr.join())
//join the array and convert to string


//slice and splice
let newarrr=[1,2,4,5,66,7]

const myn2=newarrr.slice(1,3)
console.log(myn2)
console.log("b",newarrr)

const myn1=newarrr.splice(1,3)
console.log(myn1)
console.log("A",newarrr)

