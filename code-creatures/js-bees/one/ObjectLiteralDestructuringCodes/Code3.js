function test() {
  const obj = {
    pName: "Apple",
  }
  return obj
}
let { pCode = 0, pName } = test()
console.log(pCode, pName)
