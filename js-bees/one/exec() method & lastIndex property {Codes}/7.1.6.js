let str = "this is how it is!"
let ptrn = /is/g
let result = ""
while (result != null) {
  console.log("lastIndex:" + ptrn.lastIndex)
  result = ptrn.exec(str)
  console.log(result)
}
