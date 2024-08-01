function r(a, b, c) {
  console.log(a, b, c)
}
let str = "this method is working"
let newStr = str.replace(/is/g, r)
console.log(newStr)
