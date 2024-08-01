let str = "Hi, Is it you, or not?"
let ptrn = /\w+(?=,)/g
console.log(str.match(ptrn))
