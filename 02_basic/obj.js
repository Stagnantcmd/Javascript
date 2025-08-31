
const mysum=Symbol("keey")
const stu={
    name :"armannn",
    "full name":"stagnanat",
    [mysum]:"uyyyt",
    //if we want to use symbol we use bracket
    roll:34,
    vill:"bathinda"
}

// console.log(stu.name)
//we can also initiaze with the help of this

// console.log(stu["name"])
//this not initize as name is stored as string so we have to us ""

// console.log(stu[mysum])
//we will not use "" as ssymbol

stu.name="miitar"
Object.freeze(stu)
//prevent overrite in objects or changes 
stu.name="heerp"
// console.log(stu)


stu.greeting=function(){
    console.log("hello t")
}
console.log(stu.greeting())