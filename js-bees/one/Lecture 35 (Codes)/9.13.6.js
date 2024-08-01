let str = "6511345892237012"
let ptrn = /^6(?:011|5[0-9]{2})[0-9]{12}$/
console.log(ptrn.test(str))
