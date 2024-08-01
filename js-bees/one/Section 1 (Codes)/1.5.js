let msg = "This is case sensitive"
let ptrn = new RegExp("Case", "i")
let pos = msg.search(ptrn)
console.log(pos)
