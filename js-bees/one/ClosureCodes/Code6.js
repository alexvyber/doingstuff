const addCounter = () => {
  let counter = 0
  return () => {
    counter++
    return counter
  }
}
const cl = addCounter()
console.log(cl())
console.log(cl())
console.log(cl())
