const AuthMethod = Object.freeze({
  Github: 'Github',
  Email: 'Email',
  Google: 'Google',
})

type AuthMethod = (typeof AuthMethod)[keyof typeof AuthMethod]

const doThing = (authMethod: AuthMethod) => {}

doThing('Github')
doThing(AuthMethod.Github)

// doThing(123)
// doThing("123")
// doThing(AuthMethod.NotExist)

export {}

// --

const LOG_LEVEL = Object.freeze({
  DSEBUG: 'DSEBUG',
  WARNING: 'WARNING',
  EROOR: 'EROOR',
} )

type LogLevel = keyof typeof LOG_LEVEL

const log = (msg: string, level: LogLevel) => {
  console.log(`${LOG_LEVEL[level]}: ${msg}`)
}

// -- enumsAsTypes: true
export type PublicationState = 'LIVE' | 'PREVIEW'

// -- ???
export const publicationState = {
  live: 'LIVE',
  preview: 'PREVIEW',
} as const
