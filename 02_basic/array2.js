const town=["goniana","bathinda","bhagta","jaito"]
const village=["khem","zdeda","hima","teer"]

// town.push(village)
// console.log(town)
//thus can combine but index value should be access by [3][1]

const comb=town.concat(village)
//this is helpful\but nowdays we use spered method

const neww=[...town,...village]
console.log(neww)