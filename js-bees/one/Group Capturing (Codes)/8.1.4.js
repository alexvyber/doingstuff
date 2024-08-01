let str = "FirstName, Surname"
let ptrn = /(\w+), (\w+)/g
let newStr = str.replace(ptrn, "$2 $1")
console.log(newStr)
