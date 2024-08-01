let str = "Test 3,e._"
let reg = /[\W_]/g
let nStr = str.toLowerCase().replace(reg, "")
console.log(nStr)
let rStr = nStr.split("").reverse().join("")
console.log(rStr)
