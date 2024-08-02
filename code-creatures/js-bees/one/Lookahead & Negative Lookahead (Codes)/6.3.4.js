let str = "Hi, Is it you, or not?"
let ptrn = /\b\w+(?!,|\?)\b/g
console.log(str.match(ptrn))
