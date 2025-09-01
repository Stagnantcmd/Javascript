const user={}

user.name="hello"
user.id="0001"
user.roll=20

// console.log(user)

const user2={
neww:22,
newww:{
    sbj:{
sub:"sub4sub"
    }
}
}

// console.log(user2.sbj)


const us1={1:'a',2:'b'}
const us2={3:'a',4:'b'}
const us3={5:'a',6:'b'}

const oper=Object.assign({},us1,us2,us3)
//this assign (source,target) so in new we will use ({}, , )

//or we can use spread methid
const urr3={...us1,...us2}
// console.log(urr3)


//if database come it comes in array like

const users=[{
id:9,
name:"rrtt"
},{
idd:3
}
]

console.log(user)
console.log(Object.keys(user))
//we can get value of keys in array

console.log(Object.values(user))
//we can also get values in array

console.log(Object.entries(user))
//make array of single key and value



console.log(user.hasOwnProperty('roll'))
//check if that value is present and give result in boolean