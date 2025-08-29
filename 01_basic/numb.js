const neww=new Number (100)
// console.log(neww)

// console.log(neww.toString())
//this will convert number to string 

// console.log(neww.toString().length)
//as we convert to string we can use more propoeerties


// console.log(neww.toFixed(2))
//this determine after how much deciaml should fixed


const nerr=12.555
// console.log(nerr.toPrecision(3))
//this helps in round off upto wherever we want we have to use this with caution


const hundred=100000
// console.log(hundred.toLocaleString())
//this will set value to us standard 100 and thousand

// console.log(hundred.toLocaleString('en-IN'))
//standard of india



//==============Math======================
/*
console.log(Math)
console.log(Math.round(4.7))//round off
console.log(Math.floor(4.7))//lowest
console.log(Math.ceil(4.7))//largest
console.log(Math.abs(-4))//convert only negative to positive
console.log(Math.max(4,5,2,7,8,9))
console.log(Math.min(4,5,2,7,8,9))

*/
console.log(Math.random())
console.log(Math.floor(Math.random()*10)+1)

//let the situaton of min an max

const min=34
const max=34

console.log(Math.floor(Math.random()*(max-min+1)+min))
//condition fr min and max valies with random
