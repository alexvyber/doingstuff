let str = "not easy otherwise to touch hot"
let ptrn = /ot/g
ptrn.lastIndex = 3
console.log(ptrn.lastIndex)
console.log(ptrn.exec(str))
console.log(ptrn.lastIndex)
console.log(ptrn.exec(str))
console.log(ptrn.lastIndex)
console.log(ptrn.exec(str))
console.log(ptrn.lastIndex)
console.log(ptrn.exec(str))
console.log(ptrn.lastIndex)
