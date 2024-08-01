// function createLogMessage(type, message) {
//     return `${type}: ${message}`;
// }

console.log(createLogMessage("Error", "Ops!"))
// Error: Ops!
console.log(createLogMessage("Info", "Data delivered."))
// Info: Data delivered.

function createLogMessage(type, message) {
  return `${type}: ${message}`
}

function partial(func, ...args1) {
  return (...args2) => {
    return func(...args1, ...args2)
  }
}

const onError = partial(createLogMessage, "Error")
const onInfo = partial(createLogMessage, "Info")

console.log(onError("Ops!"))
// Error: Ops!
console.log(onInfo("Data delivered."))
// Success: Data delivered.

export type {}
