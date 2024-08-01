let str = "FirstName, Surname"
let ptrn = /(?<fname>\w+), (?<sname>\w+)/
let grpVal = str.match(ptrn).groups
console.log(grpVal)
console.log(grpVal.fname)
