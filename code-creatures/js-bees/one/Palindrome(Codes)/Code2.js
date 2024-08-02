let str = "Test 3,e._"
let reg = /[\W_]/g
let nStr = str.toLowerCase().replace(reg, "")
console.log(nStr)
