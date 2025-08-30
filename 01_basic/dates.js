let date=new Date()
// console.log(date)
// console.log(date.toString())
// console.log(date.toISOString())
// console.log(date.toJSON())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleString())
// console.log(date.toTimeString())


//date is object type

let newdate=new Date(2025,3,5,6,7)
//date with time
// console.log(newdate);
// console.log(newdate.toLocaleString());

let dates= Date.now()

// console.log(dates)

// console.log(Math.floor(Date.now()/1000))


let datess= new Date(2023,0,1)
console.log(datess.getMonth()+1)

datess.toLocaleString('Default',{
    weekday:"long"
})
//use t0 customize object