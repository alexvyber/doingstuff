let str = "Code is 123-5678 and 456-456"
let ptrn = /(\d+)-\1/g
console.log(str.match(ptrn))
