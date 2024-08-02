const genFunction = function* () {
  console.log("Hello")
  yield "Y1"
  console.log("World")
  yield "Y2"
  console.log("and Galaxy")
}
const gObj = [...genFunction()]
console.log(gObj)
