function r(a, b, c) {
  return "at"
}
let str = "this method is working"
let newStr = str.replace(/is/g, r)
console.log(newStr)
