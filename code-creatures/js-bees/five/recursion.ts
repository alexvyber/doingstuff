const user = {
  profile: {
    age: 36,
    name: { first: "Krasimir", last: "Tsonev" },
  },
  more: {
    other: {
      gone: "Yes",
    },
  },
  other: 12,
}

type RecursiveKeys<T extends Record<string, any>> = {
  [Key in keyof T as number]: Key extends string
    ? T[Key] extends Record<PropertyKey, any>
      ? `${Key}.${RecursiveKeys<T[Key]>}`
      : `${Key}`
    : ""
}[number]

type Res = RecursiveKeys<typeof user>

function get<T extends Record<string, unknown>, F>(
  obj: T,
  path: RecursiveKeys<T> extends string ? RecursiveKeys<T> : never,
  fallback?: F | (() => F)
) {
  const parts = path.split(".")
  const key = parts.shift()

  if (typeof obj[key] !== "undefined") {
    return parts.length > 0 ? get(obj[key], parts.join("."), fallback) : obj[key]
  }

  return fallback
}

console.log(get(user, "profile.name.first")) // Krasimir
console.log(get(user, "profile.age")) // 36
console.log(get(user, "profile.name.last")) // undefined
console.log(get(user, "profile.registered", false)) // false

export type {}
