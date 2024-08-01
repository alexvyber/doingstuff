let str = "Told 10 times to pay $30"
let ptrn = /\b(?<!\$)\d+\b/g
console.log(str.match(ptrn))
