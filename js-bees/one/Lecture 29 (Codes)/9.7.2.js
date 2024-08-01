let str = "This is a a string test test"
let ptrn = /\b(\w+)\s\1\b/g
console.log(str.match(ptrn))
