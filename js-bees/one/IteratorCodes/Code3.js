let obj = {
  a: 10,
  b: 20,
  [Symbol.iterator]() {
    return this
  },
  next() {
    if (obj.a < obj.b) {
      return { value: obj.a++, done: false }
    } else {
      return { done: true }
    }
  },
}
for (let i of obj) {
  console.log(i)
}
