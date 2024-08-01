// function pythagorean(a, b) {
//   return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
// }

function pythagorean(a, b) {
  console.log("Doing the job ...")
  return Math.sqrt(a ** 2 + b ** 2)
}

function memo(func) {
  const cache = {}

  return () => {
    const key = JSON.stringify(arguments)

    if (cache[key]) {
      return cache[key]
    }
    return (cache[key] = func.apply(null, arguments))
  }
}
const mPythagorean = memo(pythagorean)
console.log(mPythagorean(4, 3)) // "Doing the job ..." followed by "5"
console.log(mPythagorean(4, 3)) // only "5"
console.log(mPythagorean(4, 3)) // only "5"
console.log(mPythagorean(4, 3)) // only "5"
console.log(mPythagorean(1, 3))
console.log(mPythagorean(1, 3))
console.log(mPythagorean(1, 3))
console.log(mPythagorean(1, 3))
console.log(mPythagorean(1, 3))
console.log(mPythagorean(1, 3))
