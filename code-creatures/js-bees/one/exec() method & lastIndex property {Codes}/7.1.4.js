let str = "this is how it is!"
let ptrn = /is/g
console.log(ptrn.exec(str))
console.log("lastIndex:" + ptrn.lastIndex)
console.log(ptrn.exec(str))
