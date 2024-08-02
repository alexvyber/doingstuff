let str = "abcd108@gmail.com"
let ptrn = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
console.log(ptrn.test(str))
