let str = "Dr.Java and Mr.Script are here!"
let ptrn = /(?<=Dr.)\w+/g
console.log(str.match(ptrn))
