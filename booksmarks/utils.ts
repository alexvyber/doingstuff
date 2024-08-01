// at the moment node:sqlite doesn't provide type definitions,
// so I need some easy way to log all props of an object for sqlite
export function logAllProperties(obj: object) {
  if (obj === null) return // until we hit prototype of Global

  console.log(Object.getOwnPropertyNames(obj))

  logAllProperties(Object.getPrototypeOf(obj))
}
