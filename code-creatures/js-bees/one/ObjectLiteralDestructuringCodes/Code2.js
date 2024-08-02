function test() {
  const obj = {
    pCode: 1001,
    pName: "Apple",
  }
  return obj
}
let { pCode, pName } = test()
console.log(pCode, pName)
