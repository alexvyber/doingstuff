let arr = [2, 4, 6, 8]
let result = arr.reduce((accumulator, current, index, array) => {
  accumulator += current
  if (index === array.length - 1) {
    return accumulator / array.length
  }
  return accumulator
})
console.log(result)
