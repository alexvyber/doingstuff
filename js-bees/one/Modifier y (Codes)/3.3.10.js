let str = "not easy otherwise to touch hot"
let ptrn = /\w+/gy
ptrn.lastIndex = 4
console.log(ptrn.exec(str))
