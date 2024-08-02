const genFunction = function* () {
  console.log("Hello")
  yield
  console.log("World")
  yield
  console.log("and Galaxy")
}
const gObj = genFunction()
console.log(gObj)
gObj.next()
