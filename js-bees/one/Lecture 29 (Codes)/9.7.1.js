let str = "This is a a string test test"
let ptrn = /(\w+)\s\1/g
console.log(str.match(ptrn))
