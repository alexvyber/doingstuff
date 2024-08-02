let str = "this is how it is!"
let ptrn = /is/g
ptrn.lastIndex = 4
console.log(ptrn.exec(str))
console.log("lastIndex:" + ptrn.lastIndex)
console.log(ptrn.exec(str))
