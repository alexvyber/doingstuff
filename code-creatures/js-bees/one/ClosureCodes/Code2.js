function outer() {
  function inner() {
    console.log("Inner called...")
  }
  inner()
}
outer()
