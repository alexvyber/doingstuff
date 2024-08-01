let arr = [
  [45, 90],
  [5, 6],
  [2, 4],
]
let fArr = arr.reduce((accumulator, element) => {
  return accumulator.concat(element)
}, [])
console.log(fArr)
