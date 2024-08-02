// function* calculate(): Generator<10 | 5, void, unknown> {
//   yield 10

//   const result = yield 5
//   console.log(`Result = ${result}`)
// }

// type O = Generator
// const g = calculate()
// const res1 = g.next() // {value: 10, done: false}
// const res2 = g.next() // {value: 5, done: false}
// const res3 = g.next()
// console.log("🚀 ~ res3:", res3)

// const res3 = g.next(22)
// console.log("🚀 ~ res3:", res3)

commander(robot())

function* robot() {
  const catURL = yield ["get-cat"]
  const imgTag = yield ["format", catURL]
  console.log(imgTag)
}

async function commander(gen, passBack?: unknown) {
  const state = gen.next(passBack)

  switch (state.value ? state.value[0] : null) {
    case "get-cat": {
      const res = await fetch("https://api.thecatapi.com/v1/images/search")
      const data = await res.json()

      return commander(gen, data[0].url)
    }

    case "format":
      return commander(gen, `<img src="${state.value[1]}" />`)
  }

  if (!state.done) {
    commander(gen)
  }
}
// after a second or two we'll get:
// <img src="https://cdn2.thecatapi.com/images/<random id here>.jpg" />
