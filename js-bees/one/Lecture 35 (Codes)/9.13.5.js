let str = "213145678223450"
let ptrn = /(?:2131|1800|35\d{3})\d{11}/
console.log(ptrn.test(str))
