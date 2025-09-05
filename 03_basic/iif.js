//immediately ivoked function expresiion(iiffc)

// function initia(num){
// console.log(`your vale is ${num}`)
// }

// initia(4)


(function initia(num){
console.log(`your vale is ${num}`)
})(4);
//iife where bractes are used 
//named iife

//sometime we have to use ; in iife if we declare 2nd time
((hangle=>{
    console.log(`hell ${hangle}`)
}))('tyota')