function outer() {
  function inner() {
    console.log("Inner called...")
  }
  return inner
}
const cl = outer()
cl()
