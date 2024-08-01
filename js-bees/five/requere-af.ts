function required(): never {
  throw new Error("Missing argument.")
}

function shoppingCenter(time: string, money: number = required()) {
  return {
    time,
    money,
  }
}

console.log(shoppingCenter("1h", 200))
// { time: '1h', money: 200 }
console.log(shoppingCenter("2h30min"))
// Error: Missing argument.
