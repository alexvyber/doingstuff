interface Store {
  name: string
  type: 'arrow' | 'fn' | 'class'
}

const store: Store = {
  name: 'ComponentName',
  type: 'arrow',
}

function tag(strings: TemplateStringsArray, ...expressions: (string | ((store: Store) => string))[]) {
  let str = ''

  for (let i = 0; i < strings.length; i++) {
    str += strings[i]

    const expression = expressions[i]

    if (typeof expression === 'function') {
      str += expression(store)
    }

    if (typeof expression === 'string') {
      str += expression
    }
  }

  return str
}

const res = tag`function ${(s) => s.name} () { return <></>}`

console.log({ res })
