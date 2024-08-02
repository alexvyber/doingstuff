let str = "Here 1234-4567 is to test"
let ptrn = /(\d+)-(\d+)/g
let newStr = str.replace(ptrn, "$2-$1")
console.log(newStr)
