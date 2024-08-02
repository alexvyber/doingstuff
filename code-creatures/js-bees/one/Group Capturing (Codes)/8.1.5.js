let str = "FirstName, Surname"
let ptrn = /(?<fname>\w+), (?<sname>\w+)/g
let newStr = str.replace(ptrn, "$<sname> $<fname>")
console.log(newStr)
