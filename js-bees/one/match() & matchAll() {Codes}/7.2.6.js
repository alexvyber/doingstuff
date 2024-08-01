let str = "this is how it is!"
let ptrn = /is/g
const iObj = str.matchAll(ptrn)
for (let item of iObj) {
  console.log(item[0] + "found at" + item.index)
}
