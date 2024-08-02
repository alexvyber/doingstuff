let obj = {
  start: 10,
  end: 20,
  *[Symbol.iterator]() {
    for (let cnt = this.start; cnt <= this.end; cnt++) {
      yield cnt
    }
  },
}
for (let i of obj) {
  console.log(i)
}
