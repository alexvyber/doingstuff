let str = "Told 10 times to pay $30"
let ptrn = /(?<!\$)\d+/g
console.log(str.match(ptrn))
