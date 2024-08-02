const outer = () => {
  return () => {
    console.log("Inner called...")
  }
}
const cl = outer()
cl()
