let str = "abcd.108@gmail.com.info"
let ptrn = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
console.log(ptrn.test(str))
