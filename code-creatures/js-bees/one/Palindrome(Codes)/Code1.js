let str = "Test 3,e._"
let reg = /[^A-Za-z0-9_.-]/g
let nStr = str.replace(reg, "")
console.log(nStr)
